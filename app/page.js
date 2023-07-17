"use client"; // This is a client component
import Image from 'next/image';
import formImage from "public/form.png";
import './globals.css';
// import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePathname, useRouter } from 'next/navigation';
import { motion as m}  from 'framer-motion';

export default function Home() {

  const router = useRouter();
  const pathname=usePathname();

  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      country:"United Kingdom",
      terms: "",
      
    },
    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Name must be 20 chars or less ').required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"), 
      terms: Yup.array().required('Terms of service must be checked'),
    }),

    onSubmit: (values)=>{    
      console.log("form submitted");
      console.log(values);
      router.push({pathname: "/success", query: values});
    },
  });

  // const [name, setName]=useState('');
    return (
      <m.div initial={{opacity:0}} animate={{opacity: 1}} exit={{ opacity: 0 }}>
        <main className=" h-screen items-center flex justify-center">
            <form onSubmit={formik.handleSubmit} className="bg-white flex rounded-lg w-1/2 font-sans" action="">
              <div className='flex-1 text-gray-700 p-20'>
                <h1 className='text-3xl pb-2 font-sans'>Let's Get Started 👋</h1>
                <p className='text-gray-400 font-sans text-lg'>
                  Join our E-learning platform today and unlock over 500+ courses and digital assests ready to download.
                </p>
                <div className='mt-5'>
                  {/* Name */}
                  <div className='pb-4'>
                      <label htmlFor="name" className={`block font-bold text-sm pb-2 ${ formik.touched.name && formik.errors.name? "text-red-400": ""}`} >
                        {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                      <input className="border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-blue-500 focus:ring-blue-500" type="text" name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Your Full Name" />
                    </div>
                  {/* Email  */}
                  <div className='pb-4'>
                      <label htmlFor="email"
                      className={`block font-bold text-sm pb-2 ${ formik.touched.email && formik.errors.email ? "text-red-400": ""}`}>
                      {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                      </label>
                      <input className="borde r-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-blue-500 focus:ring-blue-500" type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Email' />
                    </div>
                    {/* Country */}
                    <div className='pb-4'>
                      <label htmlFor="country" className='block font-bold text-sm pb-2'>Country</label>
                      <select className="border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-blue-500 focus:ring-blue-500" name="country" value={formik.values.country} onChange={formik.handleChange} >
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>Norway</option>
                    </select>                 
                    </div>
                    {/* Terms And Agreement */}
                    <div className='pb-4'> 
                      <label htmlFor="terms" className={`block font-bold text-sm pb-2 ${ formik.touched.terms && formik.errors.terms ? "text-red-400": ""}`}>
                      {formik.touched.terms && formik.errors.terms ? formik.errors.terms : "Terms and Agreement"}</label>
                      <div className='flex items-center gap-2'>
                          <input type='checkbox' name='terms' value="checked" className='h-5 w-5 text-blue-500 border-2 focus:border-blue-500 focus:ring-blue-500' onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                          <p className='text-sm font-bold text-gray-500' >I agree to the Terms and Service that my data will be taken.
                        </p>
                      </div>
                    </div>
                    <button type='submit' className='bg-blue-500 font-bold text-sm text-white py-3 mt-6 rounded-lg w-full'>Start learning Today</button>
                </div>
              </div>
              <div className=' relative flex-1'>
                <Image src={formImage} layout='fill' priority className='object-cover rounded-lg' alt='Form-Image'/>
              </div>
            </form>
         </main>
      </m.div>
  )
}
