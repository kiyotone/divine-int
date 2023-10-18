import { useFormik } from 'formik'
import React from 'react'


const ContactForm = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            subject:'',
            message:'',
        }
    })

    console.log("Form Values : " , formik)

  return (
    <div className='bg-[#2844a1] flex flex-col items-center text-white w-[40rem] h-[50rem] rounded-md'>
        <h1 className='pl-3 pt-10 text-[3rem] font-semibold'>
            Contact Us
        </h1>
        <div className='w-full'>

            <div className='bg-orange-500 rounded-full h-1 mx-16'/>
        </div>


        <form className='w-full pl-10 pt-20 '>
            
            <div className='flex flex-col mb-5 gap-y-2'>
            <label htmlFor='name' className='text-[1.1rem]'>Name :  </label>
            <input type='text' id='name' onChange={formik.handleChange} value={formik.values.name} className=' bg-white rounded-sm text-black h-[3rem] w-[34rem]' />                
            </div>

            <div className='flex flex-col mb-5 gap-y-2'>
            <label htmlFor='email' className='text-[1.1rem]'>Email :  </label>
            <input type='text' id='email' onChange={formik.handleChange} value={formik.values.email} className=' bg-white rounded-sm text-black h-[3rem] w-[34rem]' />                
            </div>

            <div className='flex flex-col mb-5 gap-y-2'>
            <label htmlFor='subject' className='text-[1.1rem]'>Subject :  </label>
            <input type='text' id='subject' onChange={formik.handleChange} value={formik.values.subject} className=' bg-white rounded-sm text-black h-[3rem] w-[34rem]' />                
            </div>

            <div className='flex flex-col mb-5 gap-y-2'>
            <label htmlFor='message' className='text-[1.1rem]'>Message :  </label>
            <textarea id='message' onChange={formik.handleChange} value={formik.values.message} className=' bg-white rounded-sm text-black h-[10rem] w-[34rem]' />                
            </div>

            <button className='bg-orange-500 w-[5rem] h-[2.8rem] rounded'>Submit</button>

        </form>

    </div>
  )
}

export default ContactForm