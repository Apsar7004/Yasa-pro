"use client"
import { Autocomplete,TextField} from "@mui/material"
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as yup from "yup";



export default function Section2()
{  
  const [isSubmitted, setIsSubmitted] = useState("");

  const inputvalidation=yup.object({
    name:yup.string().matches(/^[A-Za-z]+$/,'picks up only alphabets').required(),
    phone:yup.number().required(),
    from:yup.string().required(),
    to:yup.string().required(),
    when:yup.date().min(new Date(),"Book 24 hrs early").required()
  });

  const formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      from:'',
      to:'',
      when:''
    },
    validationSchema:inputvalidation,
    onSubmit:async (values,{resetForm})=>{
      console.log(values);
      try {
        const response = await fetch('/api/sendEmail', {
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
  'Bangkok']
  


  

  return(
    <div className="bg-yellow-500 py-8 2xl:pt-48 xl:pt-32 lg:pt-20 md:flex justify-around pb-28">
      
      <div className="px-8  text-center md:text-left my-10 md:w-6/12 md:my-auto ">
        <h1 className=" text-2xl font-semibold pb-8">BEST IN TOWN</h1>
        <p className=" pb-4 text-xl text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorum fugiat, ex natus quidem accusamus, aut officia consequatur recusandae aperiam, consectetur molestias. Error explicabo nostrum ullam quod deserunt pariatur aperiam.</p>
        <p className=" text-xl text-gray-900"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta est tempora eaque distinctio aperiam molestias aut, atque minima maiores, quidem totam laboriosam voluptates necessitatibus illo. Reiciendis architecto fugiat cum?</p>
      </div>

      <div className="lg:w-4/12 shadow-xl shadow-black">
        <h1 className=" font-bold text-white text-[25px] bg-black text-center py-5">BOOK A RIDE</h1>
              
        <form className="flex flex-col gap-10 relative bg-white px-10 py-6" onSubmit={formik.handleSubmit}>
          <TextField 
            className="h-[33px]" 
            label="Name" 
            name="name"
            value={formik.values.name} 
            variant="standard" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name ? true : false} 
            autoComplete="name"
            helperText={formik.touched.name && formik.errors.name? formik.errors.name:null}
          />
              
          <TextField 
            className="h-[33px]"   
            label="Phone" 
            variant="standard" 
            name="phone"
            value={formik.values.phone} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone ? true : false}
            autoComplete="phone"
          />

          <div className="flex gap-2">
            <Image
              className="pt-4 mr-4"
              src="/images/src-des.png"
              alt="Logo"
              width={40} 
              height={140} 
            />
            <div className="flex-1 flex flex-col gap-6">
              <Autocomplete 
                inputValue={formik.values.from}
                onChange={(event, value) => {formik.setFieldValue('from', value);
                } }
                onBlur={formik.handleBlur}
                options={locations}
                disableClearable
                renderInput={(params) => <TextField  {...params} label="Pick Up" 
                error={formik.touched.from && formik.errors.from ? true : false}
                id="standard-basic" variant="standard" />}
              />
        
              <Autocomplete 
                inputValue={formik.values.to}
                disableClearable
                onChange={(event, value) => formik.setFieldValue('to', value)}
                onBlur={formik.handleBlur}
                options={locations}
                renderInput={(params) => <TextField {...params} label="Destination"
                error={formik.touched.from && formik.errors.from ? true : false}
                 id="standard-basic" variant="standard" />}
              />
            </div>
          </div>

        
          <TextField
                name="when"
                value={formik.values.when} label='Date'  
                onChange={formik.handleChange} 
                variant="standard"  
                type="date" 
                onBlur={formik.handleBlur}
                error={formik.touched.when && formik.errors.when ? true : false}
                InputLabelProps={{shrink: true}}
                helperText={formik.touched.when && formik.errors.when? formik.errors.when:null}
          />
          <div className=" text-yellow-500 text-xl font-bold text-center">{isSubmitted}</div>
          <button className="bg-black text-white mx-auto px-8 py-2 font-semibold" type="submit">SUBMIT</button>
        </form>
      </div>

    </div>
  )
}