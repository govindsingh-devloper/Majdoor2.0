import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiconnector"
import { contactusEndpoint } from "../../services/api"
import toast from "react-hot-toast"
import ContactDetails from "./ContactDetails"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
      toast.success("Email Sent Successfully")
      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form onSubmit={handleSubmit(submitContactForm)}
    >
<div className="mx-auto  mt-2 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-black lg:flex-row">
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
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number <sup>*</sup>
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded "
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              //className="form-style"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded "
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
             // className="form-style"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-gray-700">
            {errors.phoneNo.message}
          </span>
        )}
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


      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
      </div>
      </div>
    </form>
  )
}

export default ContactUsForm