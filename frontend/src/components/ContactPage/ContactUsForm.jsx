import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import ContactDetails from './ContactDetails';
const ContactUsForm = () => {

const [loading, setloading]=useState(false);
const{
    register,
    handleSubmit,
    reset,
    formState:{errors, isSubmitSuccessful}
} = useForm();


const submitContactForm =async(data)=>{

}
useEffect(()=>{
    if(isSubmitSuccessful){
        reset(
            {
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                contactnumber:""
                


            }
        )

    }
},[reset,isSubmitSuccessful])



  return (
    <form onSubmit={(handleSubmit(submitContactForm))}>

<div className="mx-auto mt-2 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-black lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%] ">
          <ContactDetails />
        </div>


    <div className='container mx-auto h-full flex flex-1 flex-col justify-center items-center gap-14 '>
<div className='flex flex-col gap-5 '>
    {/* firstName */}
    <div className='flex flex-col'>
        <label  htmlFor='firstname'  >First Name<sup>*</sup></label>
        <input  className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
           type="text"
           name="firstname"
           id="firstname"
           placeholder='Enter first name' 
        {...register("firstname",{required:true})}

        />
        {
            errors.firstname&&(
                <span>
                    please enter your  name
                </span>
            )
        }


    </div>


    {/* secondName */}
    <div className='flex flex-col'>
        <label   htmlFor='lastname' >Last Name<sup>*</sup></label>
        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
           type="text"
           name="lastname"
           id="lastname"
           placeholder='Enter last name' 
        {...register("lastname",{required:true})}

        />
        </div>

        {/*email*/}
        <div className='flex  flex-col '>
            <label  htmlFor='email'>Email Address<sup>*</sup></label>
            <input  className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded "
              type="email"
              name='email'
                id='email'
                placeholder='Enter email address'
                {...register("email",{required:true})}
            />
            {
                errors.email&&(
                 <span>Please enter your email</span>   
                )
            }
        </div>
        {/*contact number*/}
        <div className='flex flex-col gap-2'>
          <label  htmlFor='contactnumber'>Contact Number<sup>*</sup></label>
       <div>
        <input  className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded "
            type='number'
            name='contactnumber'
            id='contactnumber'
            placeholder='12345 67890'
           // className='text-black'
            {...register("contactnumber",
            {required:{value:true, message:"Please enter phone number"},
            maxLength:{value:10, message:"Invalid phone number"},
            minLength:{value:10, message:"Invalid phone number"}
            }

            )}
        />
       </div>
       
        
{
    errors.contactnumber&&(
        <span>
            {errors.contactnumber.message}
        </span>
    )
}
</div>

        {/*message */}
<div className='flex flex-col'>
    <label  htmlFor='message'>Message<sup>*</sup></label>
    <textarea  className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
name='message'
id='message'
cols={30}
rows={3}
placeholder='Enter your message here'
{...register("message",{required:true})}

    />
    {
        errors.message&&(
            <span>Please enter your message</span>
        )
    }
</div>
</div>

<button type='submit'
className='rounded-md bg-orange-50 text-center px-6 text-[16px] font-bold text-black'>
Send Message
</button>
</div>
</div>
    </form>
  )
}

export default ContactUsForm
