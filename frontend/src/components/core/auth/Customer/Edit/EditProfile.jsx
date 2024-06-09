// import { useForm } from "react-hook-form"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import IconBtn from "../../../../common/IconBtn"
// import { updateProfile } from "../../../../../services/operations/editingAPI"

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
//     <>
//       <form onSubmit={handleSubmit(submitProfileForm)}>
//         {/* Profile Information */}
//         <div >
//           <h2>
//             Profile Information
//           </h2>
//           <div>
//             <div >
//               <label htmlFor="firstName">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 placeholder="Enter first name"
//                 className="form-style"
//                 {...register("firstName", { required: true })}
//                 defaultValue={user?.firstName}
//               />
//               {errors.firstName && (
//                 <span>
//                   Please enter your first name.
//                 </span>
//               )}
//             </div>
//             <div>
//               <label htmlFor="lastName" className="lable-style">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 placeholder="Enter first name"
//                 className="form-style"
//                 {...register("lastName", { required: true })}
//                 defaultValue={user?.lastName}
//               />
//               {errors.lastName && (
//                 <span>
//                   Please enter your last name.
//                 </span>
//               )}
//             </div>
//           </div>

//           <div>
//             <div>
//               <label htmlFor="dateOfBirth">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 id="dateOfBirth"
//                 className="form-style"
//                 {...register("dateOfBirth", {
//                   required: {
//                     value: true,
//                     message: "Please enter your Date of Birth.",
//                   },
//                   max: {
//                     value: new Date().toISOString().split("T")[0],
//                     message: "Date of Birth cannot be in the future.",
//                   },
//                 })}
//                 defaultValue={user?.additionalDetails?.dateOfBirth}
//               />
//               {errors.dateOfBirth && (
//                 <span>
//                   {errors.dateOfBirth.message}
//                 </span>
//               )}
//             </div>
//             <div>
//               <label htmlFor="gender" className="lable-style">
//                 Gender
//               </label>
//               <select
//                 type="text"
//                 name="gender"
//                 id="gender"
//                 className="form-style"
//                 {...register("gender", { required: true })}
//                 defaultValue={user?.additionalDetails?.gender}
//               >
//                 {genders.map((ele, i) => {
//                   return (
//                     <option key={i} value={ele}>
//                       {ele}
//                     </option>
//                   )
//                 })}
//               </select>
//               {errors.gender && (
//                 <span>
//                   Please enter your Date of Birth.
//                 </span>
//               )}
//             </div>
//           </div>

//           <div>
//             <div>
//               <label htmlFor="contactNumber" className="lable-style">
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 name="contactNumber"
//                 id="contactNumber"
//                 placeholder="Enter Contact Number"
//                 className="form-style"
//                 {...register("contactNumber", {
//                   required: {
//                     value: true,
//                     message: "Please enter your Contact Number.",
//                   },
//                   maxLength: { value: 12, message: "Invalid Contact Number" },
//                   minLength: { value: 10, message: "Invalid Contact Number" },
//                 })}
//                 defaultValue={user?.additionalDetails?.contactNumber}
//               />
//               {errors.contactNumber && (
//                 <span>
//                   {errors.contactNumber.message}
//                 </span>
//               )}
//             </div>
//             <div>
//               <label htmlFor="about">
//                 About
//               </label>
//               <input
//                 type="text"
//                 name="about"
//                 id="about"
//                 placeholder="Enter Bio Details"
//                 className="form-style"
//                 {...register("about", { required: true })}
//                 defaultValue={user?.additionalDetails?.about}
//               />
//               {errors.about && (
//                 <span>
//                   Please enter your About.
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-end gap-2">
//           <button
//             onClick={() => {
//               navigate("/CustHome")
//             }}
           
//           >
//             Cancel
//           </button>
//           <IconBtn type="submit" text="Save"
//           onclick={() => {
//               navigate("/CustHome")
//             }}
//            />
//           {/* <button type="submit" text="save">
//             Save
//           </button> */}
//         </div>
//       </form>
//     </>
//   )
// }


import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../../../common/IconBtn";
import { updateProfile } from "../../../../../services/operations/editingAPI";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    console.log("Form Data - ", data);
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <div className="p-5 md:p-10 bg-gray-100">
      <form
        onSubmit={handleSubmit(submitProfileForm)}
        className="bg-white p-5 md:p-10 shadow-md rounded-lg"
      >
        {/* Profile Information */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Profile Information
          </h2>
          <div className="md:flex md:justify-between gap-6 mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs italic">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs italic">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div className="md:flex md:justify-between gap-6 mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="dateOfBirth"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="text-red-500 text-xs italic">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <span className="text-red-500 text-xs italic">
                  Please select your gender.
                </span>
              )}
            </div>
          </div>

          <div className="md:flex md:justify-between gap-6 mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="contactNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <span className="text-red-500 text-xs italic">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="about"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="text-red-500 text-xs italic">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="bg-white text-gray-800 border border-gray-800 rounded-full py-2 px-6 transition duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white"
            onClick={() => {
              navigate("/CustHome");
            }}
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </div>
  );
}
