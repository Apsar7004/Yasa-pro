"use client"
import { TextField} from "@mui/material"
import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";
// import { useRouter } from 'next/router';



function AdminLogin(){

    // const router = useRouter();

  const inputvalidation=yup.object({

    phone:yup.string().required(),
    mail:yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues:{

      phone:'',
      mail:'',

    },
    validationSchema:inputvalidation,
    onSubmit:async (values)=>{
      console.log(values);
      try {
        const response = await fetch('/api/adminLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
            if(response.status === 200){
                const data = await response.json();
                console.log(data.message)
                window.location.href = '/vehicle'; 

            }
        } else {
            const data = await response.json();
            console.log(data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  });
    return (
        <div className="flex">
            <div className="w-2/5 pl-8 h-[100vh] bg-yellow-500">
                <div className="w-[250px] h-[100px] relative" >
            <Image 
              src='/ADMIN/y1.png'
              alt="company image"
              fill
            />
       
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="p-8">
                <h1 className="  text-green-900 font-bold text-[52px]">WELCOME TO THE <span className="text-white">YASA </span>TAXI</h1>
                <p  className=" text-gray-500  underline">Enter your valid email and password to continue.</p>

                <p className=" text-green-900 font-semibold pt-20">What is your Email?</p>
                <TextField 
                className="w-full bg-white mt-4"   
                label="Email" sx={{ borderRadius: '10px' }}
                variant="outlined" 
                name="mail"
                type="mail"
                value={formik.values.mail} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.mail && formik.errors.mail ? true : false}
               
              />
              <br>
              </br>
              <p className=" text-green-900 font-semibold pt-8">password?</p>
              <TextField 
                className="w-full bg-white mt-4"  
                sx={{ borderRadius: '10px' }}
                variant="outlined"
                label='password' 
                name="phone"
                
                value={formik.values.phone} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone ? true : false}
              />
            </div>
            <button className="font-semibold mx-auto w-[300px] ml-8 py-4 bg-black text-white"  type="submit">Login to your account</button>
            </form>
            </div>
            
            <div className="w-3/5 relative" >
            <Image 
              src='/ADMIN/LOG.jpeg'
              alt="company image"
              fill
            />
       
            </div>
        </div>
    )
}

export default AdminLogin;