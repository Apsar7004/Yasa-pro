"use client"

import { TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';



function Features({params}){
    const [data,setdata] = useState('');
    let getdata = async () =>{
    try {
        const response = await fetch(`/api/${params.id}`, {method: 'GET'});
        if(response.status === 200){
            const data = await response.json();
            console.log(data.user)
            setdata(data.user);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    useEffect(()=>{
        getdata()}
        ,[])
        const [selectedImages,setSelectedImages] =useState<string[]>([]);
        let imgarray:string[] = []
      
      
      
          const inputvalidationforfulltrip = yup.object({
            vehicleId: yup.string().required('Vehicle ID is required'),
            vehicleType: yup.string().required('Vehicle type is required'),
            manager: yup.string().required('Manager is required'),
            driver: yup.string().required('Driver is required'),
            purchaseDate: yup.date().required('Purchase date is required'),
            tripsCount: yup.number().required('Trips count is required').min(0, 'Trips count must be non-negative'),
            licenseNumber: yup.string().required('License number is required'),
            registration: yup.string().required('Registration is required'),
            vehicleNumber: yup.string().required('Vehicle num is required'),
            img: yup.array()
      
        });
        const formik = useFormik({
          initialValues: {
              vehicleId: '',
              vehicleType: '',
              manager: '',
              driver: '',
              purchaseDate: '',
              tripsCount: '',
              vehicleNumber : '',
              licenseNumber: '',
              registration: '',
              img:[]
          },
          validationSchema:inputvalidationforfulltrip,
          onSubmit: async (values) => {
            console.log(values);
        
            try {
              const response = await fetch('/api/uploadimage', {
                method: 'POST',
               
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              });
      
              if (response.ok) {
                console.log('Image uploaded successfully');
                  setSelectedImages([])
                 // Reset the form after successful submission
              } else {
                console.error('Failed to upload image');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        });
      
        function convertToBase64(file: File): Promise<string> {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const base64String = reader.result as string;
              resolve(base64String);
            };
            reader.onerror = (error) => {
              reject(error);
            };
          });
        }
        
      
        const handleImageChange = async (event) => {
          const files = event.target.files[0];
          try {
            const base64String = await convertToBase64(files);
            setSelectedImages([...selectedImages, base64String]);
            formik.setFieldValue('img', [...formik.values.img, base64String]); 
            console.log(formik.values.img)
          } catch (error) {
            console.error('Error converting to base64:', error);
          }
        };
        
    return (
        <div>
        <form onSubmit={formik.handleSubmit} className=' pt-80 flex flex-col gap-8'>
        <TextField
            fullWidth
            id="vehicleId"
            name="vehicleId"
            label="Vehicle ID"
            value={formik.values.vehicleId}
            onChange={formik.handleChange}
            error={formik.touched.vehicleId && Boolean(formik.errors.vehicleId)}
            helperText={formik.touched.vehicleId && formik.errors.vehicleId}
          />
          <TextField
            fullWidth
            id="vehicleNumber"
            name="vehicleNumber"
            label="vehicleNumber"
            value={formik.values.vehicleNumber}
            onChange={formik.handleChange}
            error={formik.touched.vehicleNumber && Boolean(formik.errors.vehicleNumber)}
            helperText={formik.touched.vehicleNumber&& formik.errors.vehicleNumber}
          />
    
          <TextField
            fullWidth
            id="vehicleType"
            name="vehicleType"
            label="Vehicle Type"
            value={formik.values.vehicleType}
            onChange={formik.handleChange}
            error={formik.touched.vehicleType && Boolean(formik.errors.vehicleType)}
            helperText={formik.touched.vehicleType && formik.errors.vehicleType}
          />
    
          <TextField
            fullWidth
            id="manager"
            name="manager"
            label="Manager"
            value={formik.values.manager}
            onChange={formik.handleChange}
            error={formik.touched.manager && Boolean(formik.errors.manager)}
            helperText={formik.touched.manager && formik.errors.manager}
          />
    
          <TextField
            fullWidth
            id="driver"
            name="driver"
            label="Driver"
            value={formik.values.driver}
            onChange={formik.handleChange}
            error={formik.touched.driver && Boolean(formik.errors.driver)}
            helperText={formik.touched.driver && formik.errors.driver}
          />
    
          <TextField
            fullWidth
            id="driver"
            name="licenseNumber"
            label="licenseNumber"
            value={formik.values.licenseNumber}
            onChange={formik.handleChange}
            error={formik.touched.licenseNumber && Boolean(formik.errors.licenseNumber)}
            helperText={formik.touched.licenseNumber && formik.errors.licenseNumber}
          />
    
            <TextField
            fullWidth
            id="driver"
            name="registration"
            label="registration"
            value={formik.values.registration}
            onChange={formik.handleChange}
            error={formik.touched.registration && Boolean(formik.errors.registration)}
            helperText={formik.touched.registration && formik.errors.registration}
          />
    
          <TextField
            fullWidth
            id="driver"
            name="tripsCount"
            label="tripsCount"
            value={formik.values.tripsCount}
            onChange={formik.handleChange}
            error={formik.touched.tripsCount&& Boolean(formik.errors.tripsCount)}
            helperText={formik.touched.tripsCount&& formik.errors.tripsCount}
          />
          <TextField
                    className="w-full"
                    name="purchaseDate"
                    value={formik.values.purchaseDate} label='Arrival Date and Time'  
                    onChange={formik.handleChange} 
                    variant="outlined"  
                    type="date" 
                    onBlur={formik.handleBlur}
                    error={formik.touched.purchaseDate && formik.errors.purchaseDate ? true : false}
                    InputLabelProps={{shrink: true}}
                    helperText={formik.touched.purchaseDate && formik.errors.purchaseDate? formik.errors.purchaseDate:null}
                  />
    
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      multiple={false}
    />
    
        
    
    <button className="mx-auto font-semibold py-4 w-full bg-black text-white " type="submit">SUBMIT</button>
        </form>
        
        <Image
        src={selectedImages[1]}
        alt = "car image"
        height={400}
        width={400}
    
        
        />
       </div>
    )
}
export default Features;
