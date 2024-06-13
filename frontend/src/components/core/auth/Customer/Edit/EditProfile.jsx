import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import IconBtn from "../../../../common/IconBtn"
import { updateProfile } from "../../../../../services/operations/editingAPI"

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    console.log("Form Data - ", data)
    try {
     dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        {/* Profile Information */}
        <div >
          <h2>
            Profile Information
          </h2>
          <div>
            <div >
              <label htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="form-style"
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span>
                  Please enter your first name.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="lable-style">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                className="form-style"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span>
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfbirth"
                id="dateOfbirth"
                className="form-style"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfbirth}
              />
              {errors.dateOfbirth && (
                <span>
                  {errors.dateOfbirth.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="gender" className="lable-style">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-style"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
              {errors.gender && (
                <span>
                  Please enter your Date of Birth.
                </span>
              )}
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="contactNumber" className="lable-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span>
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="about">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="form-style"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span>
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/CustomerDashboard")
            }}
           
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save"
          onClick={() => {
              navigate("/CustomerDashboard")
            }}
           />
          {/* <button type="submit" text="save">
            Save
          </button> */}
        </div>
      </form>
    </>
  )
}


//////////////////////////////////////////////
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import IconBtn from '../../../../common/IconBtn'
// import { updateProfile } from '../../../../../services/operations/editingAPI'

// const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

// export default function EditProfile() {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const submitProfileForm = async (data) => {
//     console.log("Form Data - ", data)
//     try {
//       dispatch(updateProfile(token, data))
//     } catch (error) {
//       console.log("ERROR MESSAGE - ", error.message)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-8 text-gray-900">Edit Profile</h2>
//         <form onSubmit={handleSubmit(submitProfileForm)} className="space-y-6">
//           {/* Profile Information */}
//           <div>
//             <h3 className="text-xl font-medium text-gray-800 mb-6">Profile Information</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="firstName"
//                   placeholder="Enter first name"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("firstName", { required: true })}
//                   defaultValue={user?.firstName}
//                 />
//                 {errors.firstName && (
//                   <span className="text-red-500 text-sm">Please enter your first name.</span>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="lastName"
//                   placeholder="Enter last name"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("lastName", { required: true })}
//                   defaultValue={user?.lastName}
//                 />
//                 {errors.lastName && (
//                   <span className="text-red-500 text-sm">Please enter your last name.</span>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="dateOfBirth" className="block text-lg font-medium text-gray-700">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   name="dateOfBirth"
//                   id="dateOfBirth"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("dateOfBirth", {
//                     required: {
//                       value: true,
//                       message: "Please enter your Date of Birth.",
//                     },
//                     max: {
//                       value: new Date().toISOString().split("T")[0],
//                       message: "Date of Birth cannot be in the future.",
//                     },
//                   })}
//                   defaultValue={user?.additionalDetails?.dateOfBirth}
//                 />
//                 {errors.dateOfBirth && (
//                   <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="gender" className="block text-lg font-medium text-gray-700">
//                   Gender
//                 </label>
//                 <select
//                   name="gender"
//                   id="gender"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("gender", { required: true })}
//                   defaultValue={user?.additionalDetails?.gender}
//                 >
//                   {genders.map((ele, i) => (
//                     <option key={i} value={ele}>{ele}</option>
//                   ))}
//                 </select>
//                 {errors.gender && (
//                   <span className="text-red-500 text-sm">Please select your gender.</span>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="contactNumber"
//                   id="contactNumber"
//                   placeholder="Enter Contact Number"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("contactNumber", {
//                     required: {
//                       value: true,
//                       message: "Please enter your Contact Number.",
//                     },
//                     maxLength: { value: 12, message: "Invalid Contact Number" },
//                     minLength: { value: 10, message: "Invalid Contact Number" },
//                   })}
//                   defaultValue={user?.additionalDetails?.contactNumber}
//                 />
//                 {errors.contactNumber && (
//                   <span className="text-red-500 text-sm">{errors.contactNumber.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="about" className="block text-lg font-medium text-gray-700">
//                   About
//                 </label>
//                 <input
//                   type="text"
//                   name="about"
//                   id="about"
//                   placeholder="Enter Bio Details"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//                   {...register("about", { required: true })}
//                   defaultValue={user?.additionalDetails?.about}
//                 />
//                 {errors.about && (
//                   <span className="text-red-500 text-sm">Please enter details about yourself.</span>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end gap-4">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
//               onClick={() => {
//                 navigate("/CustomerDashboard")
//               }}
//             >
//               Cancel
//             </button>
//             <IconBtn type="submit" text="Save" />
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
