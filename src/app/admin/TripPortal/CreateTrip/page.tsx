"use client"
import { Autocomplete,TextField} from "@mui/material"
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as yup from "yup";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Agent(){
    const [triptype, setTriptype] = useState('SingleTrip');
    const [isSubmitted, setIsSubmitted] = useState("");
    const [selectedPlaces, setSelectedPlaces] = useState();

    const today = new Date();
    const minBookingTime = new Date(today.getTime() + (12 * 60 * 60 * 1000));

  const inputvalidationforsingletrip=yup.object({
    agent_name:yup.string().matches(/^[A-Za-z]+$/,'picks up only alphabets').required(),
    agency_name:yup.string().matches(/^[A-Za-z]+$/,'picks up only alphabets').required(),
    phone:yup.number().required(),
    mail:yup.string().email('Invalid email address').required('Email is required'),
    from:yup.string().required("choose the pickup location"),
    to:yup.string().required("choose the destination for drop"),
    arrival_date:yup.date().min(minBookingTime,"Booking must be made at least 12 hours in advance").required(), 
    total_seats:yup.number().min(1,"Required single passanger to book.").max(40,'to book more than for 40 people contact us directly.').required()
  });
  const inputvalidationforfulltrip=yup.object({
    agent_name:yup.string().matches(/^[A-Za-z]+$/,'picks up only alphabets').required(),
    agency_name:yup.string().matches(/^[A-Za-z]+$/,'picks up only alphabets').required(),
    phone:yup.number().required(),
    mail:yup.string().email('Invalid email address').required('Email is required'),
    from:yup.string().required("choose the pickup location"),
    places:yup.array().min(1,'If you choose full traves support then pick  atleat 1 place.'),
    arrival_date:yup.date().min(minBookingTime,"Booking must be made at least 12 hours in advance").required(),
    total_days:yup.number().required(),  
    total_seats:yup.number().min(1,"Required single passanger to book.").max(40,'to book more than for 40 people contact us directly.').required()
  });

  const formik = useFormik({
    initialValues:{
      agent_name:'',
      agency_name:'',
      phone:'',
      mail:'',
      trip:triptype,
      from:'',
      to:'',
      places:[],
      arrival_date:'',
      total_days:'',
      total_seats:'',
    },
    validationSchema:()=>{return (triptype ==='SingleTrip'? inputvalidationforsingletrip : inputvalidationforfulltrip)},
    onSubmit:async (values,{resetForm})=>{
      console.log(values);
      try {
        const response = await fetch('/api/sendEmail2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setIsSubmitted("Booking completed ! we will contact you soon.");
          resetForm();
          setTimeout(() => {
            setIsSubmitted('');
          }, 5000);
        } else {
          setIsSubmitted("Error in email");
          setTimeout(() => {
            setIsSubmitted('');
          }, 5000);
        }
      } catch (error) {
        setIsSubmitted("Couldn't send email" );
          setTimeout(() => {
            setIsSubmitted('');
          }, 5000);
      }
    }
  });
  
  
  const locations:string[] = ['BKK Airport',
  'DMK Airport',
  'Pattaya',
  'Bangkok',
  'Krabi',
  'Phuket',
  'Chaing Mai']
  


    
  return(
    <div className="h-[100vh]  flex justify-between">
      
      <div className="w-3/12 relative max-lg:hidden" >
            <Image 
              src='/images/agent.jpg'
              alt="company image"
              fill
            />
      </div> 
  
      <div className="w-full lg:w-6/12 lg:mx-auto my-auto text-center sm:shadow-2xl sm:shadow-black">
        <div className="flex flex-col sm:flex-row">
          <Image
              className="mx-auto"
              src="/images/name1.png"
              alt="Logo"
              width={170} 
              height={170} 
          />
          <h1  className="p-4 bg-black font-bold text-[25px] grow my-auto text-white">BOOK A RIDE</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div  className="flex flex-col gap-4 py-4 px-5 bg-white">
            <div className="flex flex-col md:flex-row md:justify-around gap-6">
              <TextField 
                className="w-full" 
                label="Agent Name" 
                name="agent_name"
                variant="outlined" 
                value={formik.values.agent_name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.agent_name && formik.errors.agent_name ? true : false} 
                helperText={formik.touched.agent_name && formik.errors.agent_name? formik.errors.agent_name:null}
              />
              <TextField 
                className="w-full" 
                label="agency_name" 
                name="agency_name"
                variant="outlined" 
                value={formik.values.agency_name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.agency_name && formik.errors.agency_name ? true : false} 
                helperText={formik.touched.agency_name && formik.errors.agency_name? formik.errors.agency_name:null}
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-around gap-6">
              <TextField 
                className="w-full"   
                label="Phone" 
                variant="outlined" 
                name="phone"
                value={formik.values.phone} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone ? true : false}
              />
              <TextField 
                className="w-full"   
                label="Email" 
                variant="outlined" 
                name="mail"
                type="mail"
                value={formik.values.mail} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.mail && formik.errors.mail ? true : false}
                helperText={formik.touched.mail && formik.errors.mail? formik.errors.mail:null}
              />
            </div>
            <div >
              <FormControl>
                <FormLabel> Trip Type</FormLabel>
                <RadioGroup
                  name="trip"
                  value={triptype}
                  onChange={(e)=>
                    {setTriptype(e.target.value);
                      formik.resetForm();
                      formik.handleChange(e);
                      formik.setFieldValue('trip', e.target.value);
                    }}
                >
                  <FormControlLabel value="SingleTrip" control={<Radio />} label="One-time Journey" />
                  <FormControlLabel value="RoundTrip_To_thailand" control={<Radio />} label="Full Travel Support in Thailand" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex flex-col md:flex-row md:justify-around gap-6">
                <Autocomplete 
                  className="w-full"
                  inputValue={formik.values.from}
                  onInputChange={(event, value) => {formik.setFieldValue('from', value);
                  } }
                  onBlur={formik.handleBlur('from')}
                  options={locations}
                  disableClearable
                  renderInput={(params) => <TextField  {...params} label="Pick Up" 
                  error={formik.touched.from && formik.errors.from ? true : false}
                  helperText={formik.touched.from && formik.errors.from? formik.errors.from:null}
                  variant="outlined" />}
                />
                {triptype === 'SingleTrip' && 
                  <Autocomplete 
                    className="w-full" 
                    inputValue={formik.values.to}
                    disableClearable
                    onInputChange={(event, value) => formik.setFieldValue('to', value)}
                    onBlur={formik.handleBlur('to')}
                    options={locations}
                    renderInput={(params) => <TextField {...params} label="Destination"
                    error={formik.touched.from && formik.errors.from ? true : false}
                    helperText={formik.touched.to && formik.errors.to? formik.errors.to:null}
                    variant="outlined" />}
                  />
                }
                <TextField 
                  className="w-full"   
                  label="No of Passangers" 
                  variant="outlined"
                  type="number" 
                  name="total_seats"
                  value={formik.values.total_seats} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  error={formik.touched.total_seats && formik.errors.total_seats ? true : false}
                  helperText={formik.touched.total_seats && formik.errors.total_seats? formik.errors.total_seats:null}
                />
            </div>
            <div>
              {triptype === 'RoundTrip_To_thailand' && <Autocomplete 
                    multiple
                    className="w-full"
                    inputValue={selectedPlaces}
                    onChange={(event, value) => {
                      formik.setFieldValue('places', value)
                    } }
                    onBlur={formik.handleBlur('places')}
                    options={locations}
                    renderInput={(params) => <TextField  {...params} label="Places you like to visit in THAILAND." 
                    error={formik.touched.places && formik.errors.places ? true : false}
                    helperText={formik.touched.places && formik.errors.places? formik.errors.places:null}
                    variant="outlined" />}
                  />
                }
                
            </div>    
            <div className="flex flex-col md:flex-row md:justify-around gap-6">
              <TextField
                className="w-full"
                name="arrival_date"
                value={formik.values.arrival_date} label='Arrival Date and Time'  
                onChange={formik.handleChange} 
                variant="outlined"  
                type="datetime-local" 
                onBlur={formik.handleBlur}
                error={formik.touched.arrival_date && formik.errors.arrival_date ? true : false}
                InputLabelProps={{shrink: true}}
                helperText={formik.touched.arrival_date && formik.errors.arrival_date? formik.errors.arrival_date:null}
              />
              {triptype === 'RoundTrip_To_thailand' && 
                <TextField 
                  className="w-full" 
                  label="No of days you need our service." 
                  name="total_days"
                  variant="outlined" 
                  value={formik.values.total_days} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  error={formik.touched.total_days && formik.errors.total_days ? true : false} 
                  helperText={formik.touched.total_days && formik.errors.total_days? formik.errors.total_days:null}
                />
              }
                
              
            </div>
            <div className="text-yellow-500 text-xl font-bold text-center">
              {isSubmitted}
            </div>

          </div>
          <button className="mx-auto font-semibold py-4 w-full bg-black text-white " type="submit">SUBMIT</button>
        </form>
      </div>
        
    </div>
  )
}

export default Agent;