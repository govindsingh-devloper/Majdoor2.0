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

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiEditBoxLine } from 'react-icons/ri';
import { formattedDate } from '../../../../utilis/dateFormatter';
import IconBtn from '../../../common/IconBtn';

const CustDashboard = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Profile</h1>

          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 relative">
              <img
                className="h-20 w-20 object-cover rounded-full"
                src={user?.image}
                alt="User Profile"
              />
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-800">
                {user?.firstName + ' ' + user?.lastName}
              </p>
              <p className="text-gray-600 text-lg">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4">
              <p className="text-lg text-gray-600 mb-2">About</p>
              <p className="text-base text-gray-700">
                {user?.additionalDetails?.about ||
                  'Write something about yourself'}
              </p>
            
              <IconBtn text="Edit" 
              onclick={() => {
              navigate("/CustomerDashboard/Edit")
            }}>
                <RiEditBoxLine />
              </IconBtn>
            
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">First Name</p>
                <p className="text-base font-medium text-gray-700">
                  {user?.firstName}
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">Last Name</p>
                <p className="text-base font-medium text-gray-700">
                  {user?.lastName}
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">Email</p>
                <p className="text-base font-medium text-gray-700">
                  {user?.email}
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">Phone Number</p>
                <p className="text-base font-medium text-gray-700">
                  {user?.additionalDetails?.contactNumber ||
                    'Add contact number'}
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">Gender</p>
                <p className="text-base font-medium text-gray-700">
                  {user?.additionalDetails?.gender || 'Add gender'}
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                <p className="text-lg text-gray-600 mb-2">Date of Birth</p>
                <p className="text-base font-medium text-gray-700">
                  {formattedDate(user?.additionalDetails?.dateOfBirth) ||
                    'Add date of birth'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustDashboard;

