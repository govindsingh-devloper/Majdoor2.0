import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../../../common/IconBtn';
import { updateProfile } from '../../../../../services/operations/editingAPI';

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

const EditProfile = () => {
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
<<<<<<< Updated upstream
     dispatch(updateProfile(token, data))
=======
      await dispatch(updateProfile(token, data));
      navigate("/CustomerDashboard");
>>>>>>> Stashed changes
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-900">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              className="form-input mt-1 block w-full"
              {...register("firstName", { required: true })}
              defaultValue={user?.firstName}
            />
            {errors.firstName && (
              <span className="text-red-600 text-sm">Please enter your first name.</span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-900">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              className="form-input mt-1 block w-full"
              {...register("lastName", { required: true })}
              defaultValue={user?.lastName}
            />
            {errors.lastName && (
              <span className="text-red-600 text-sm">Please enter your last name.</span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-900">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="form-input mt-1 block w-full"
              {...register("dateOfBirth", {
                required: "Please enter your Date of Birth.",
                max: {
                  value: new Date().toISOString().split("T")[0],
                  message: "Date of Birth cannot be in the future.",
                },
              })}
              defaultValue={user?.additionalDetails?.dateOfBirth}
            />
            {errors.dateOfBirth && (
              <span className="text-red-600 text-sm">{errors.dateOfBirth.message}</span>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-medium text-gray-900">Gender</label>
            <select
              name="gender"
              id="gender"
              className="form-select mt-1 block w-full"
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
              <span className="text-red-600 text-sm">Please select your gender.</span>
            )}
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label htmlFor="contactNumber" className="text-sm font-medium text-gray-900">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              placeholder="Enter contact number"
              className="form-input mt-1 block w-full"
              {...register("contactNumber", {
                required: "Please enter your contact number.",
                maxLength: { value: 12, message: "Invalid contact number." },
                minLength: { value: 10, message: "Invalid contact number." },
              })}
              defaultValue={user?.additionalDetails?.contactNumber}
            />
            {errors.contactNumber && (
              <span className="text-red-600 text-sm">{errors.contactNumber.message}</span>
            )}
          </div>

          {/* About */}
          <div className="flex flex-col">
            <label htmlFor="about" className="text-sm font-medium text-gray-900">About</label>
            <input
              type="text"
              name="about"
              id="about"
              placeholder="Enter bio details"
              className="form-input mt-1 block w-full"
              {...register("about", { required: true })}
              defaultValue={user?.additionalDetails?.about}
            />
            {errors.about && (
              <span className="text-red-600 text-sm">Please enter your about.</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={() => navigate("/CustomerDashboard")}
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
<<<<<<< Updated upstream
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
=======
    </div>
  );
};

export default EditProfile;
>>>>>>> Stashed changes
