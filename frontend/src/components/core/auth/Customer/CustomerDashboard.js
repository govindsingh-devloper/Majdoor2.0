// import React from 'react'
// // import "../../../../css/style.css";
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { RiEditBoxLine } from "react-icons/ri"
// import { formattedDate } from "../../../../utilis/dateFormatter"
// import IconBtn from '../../../common/IconBtn';

// const CustDashboard = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();

//   return (
//  <div className="profile-container">
//       <div className="profile-image">
//         <img src={user?.image} alt="User Profile" />

//     <div>
//       {/* <h1>My Profile</h1> */}
//       {/* <img
//         src={user?.image}
//       /> */}
//       {/* <p>{user?.firstName + " "+user?.lastName}</p>
//       <p>{user?.email}</p> */}
//       {/* <div>
//       <p>
//         About
//       </p>
//       <span
//             text="Edit"
//             onclick={() => {
//               navigate("/CustHome/Edit")
//             }}
//           >
//             <RiEditBoxLine />
//           </span>

//       </div> */}
//       <div className="profile-details">
//         <h1>My Profile</h1>
//         <p>FULL Name :{user?.firstName + " " + user?.lastName}</p>
//         <p> Email : {user?.email}</p>
//         <p>
//           About
//         </p>
//         <IconBtn
//         text="Edit"
//             onclick={() => {
//               navigate("/CustomerDashboard/Edit")
//             }}>
//               <RiEditBoxLine />
//         </IconBtn>
//         <p>{user?.additionalDetails?.about ?? "Write Something About Yourself"}</p>
//         <IconBtn
//         text="Edit"
//             onclick={() => {
//               navigate("/CustomerDashboard/Edit")
//             }}>
//               <RiEditBoxLine />
//         </IconBtn>
//       </div>
//       <div className="flex max-w-[500px] justify-between">
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">First Name</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.firstName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Email</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.email}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Gender</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.additionalDetails?.gender ?? "Add Gender"}
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Last Name</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.lastName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
//               </p>
//             </div>

//           </div>
//         </div>




//       <div>
//               <h1>
//               <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
//               </h1>
//               <p className="text-sm font-medium text-richblack-5">
//                 {formattedDate(user?.additionalDetails?.dateOfBirth) ??
//                   "Add Date Of Birth"}
//               </p>
//             </div>

            

//     </div>
//     </div>
//     </div>

//   );
// };

// export default CustDashboard;
////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RiEditBoxLine } from 'react-icons/ri';
// import { formattedDate } from '../../../../utilis/dateFormatter';
// import IconBtn from '../../../common/IconBtn';


// const sharedClasses = {
//   cardContainer: 'p-4 bg-white rounded-lg shadow-sm',
//   button: 'px-8 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400',
// }




// const CustDashboard = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <div className="flex flex-col md:flex-row items-center md:items-start">
//         <img
//           className="h-20 w-20 object-cover rounded-full"
//           src={user?.image}
//           alt="User Profile"
//         />
//         <div className="flex-1 ml-4">
//           <h2 className="text-3xl font-semibold text-gray-900">
//             {user?.firstName + ' ' + user?.lastName}
//           </h2>
//           <p className="text-gray-600">{user?.email}</p>
//           <div className="mt-4">
//             <h3 className="text-lg font-medium text-gray-900">About</h3>
//             <p className="text-gray-600">
//               {user?.additionalDetails?.about || 'Write something about yourself'}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Display other user details as you did before */}
//       </div> 
//       <div className={sharedClasses.cardContainer}>
//         <button
//           className={`${sharedClasses.button} w-full`}
//           onClick={() => {
//             navigate("/CustomerDashboard/Edit")
//           }}>
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustDashboard;

////////////////////////////////////////////////////////////////

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiEditBoxLine } from 'react-icons/ri';
import { formattedDate } from '../../../../utilis/dateFormatter';
import IconBtn from '../../../common/IconBtn';


const sharedClasses = {
  cardContainer: 'p-4 bg-white rounded-lg shadow-sm',
  button: 'px-8 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400',
}


const CustDashboard = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
   
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          className="h-20 w-20 object-cover rounded-full"
          src={user?.image}
          alt="User Profile"
        />
        <div className="flex-1 ml-4">
          <h2 className="text-3xl font-semibold text-gray-900">
            {user?.firstName + ' ' + user?.lastName}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">About</h3>
            <p className="text-gray-600">
              {user?.additionalDetails?.about || 'Write something about yourself'}
            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">First Name</h4>
          <p className="text-gray-600">{user?.firstName}</p>
        </div>

        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">Last Name</h4>
          <p className="text-gray-600">{user?.lastName}</p>
        </div>

        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">Email</h4>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">Phone Number</h4>
          <p className="text-gray-600">{user?.additionalDetails?.contactNumber || 'Add contact number'}</p>
        </div>

        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">Gender</h4>
          <p className="text-gray-600">{user?.additionalDetails?.gender || 'Add gender'}</p>
        </div>

        <div className={sharedClasses.cardContainer}>
          <h4 className="text-sm font-medium text-gray-900">Date of Birth</h4>
          <p className="text-gray-600">{formattedDate(user?.additionalDetails?.dateOfBirth) || 'Invalid Date'}</p>
        </div>

       
      </div> <div className={sharedClasses.cardContainer}>
          <button
            className={`${sharedClasses.button} w-full`}
            onClick={() => {
              navigate("/CustomerDashboard/Edit")
            }}>
            Update
          </button>
        </div>
    </div>
  );
};

export default CustDashboard;