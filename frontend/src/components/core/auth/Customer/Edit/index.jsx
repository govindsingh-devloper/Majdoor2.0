import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'
// const Edit = () => {
//   return (
//     <div>
//     <h1>Update Profile</h1>
//         <ChangeProfilePicture/>
//         <EditProfile/>
//     </div>
//   )
// }

// export default Edit


export default function Edit() {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
     {/* <UpdatePassword />
      {/* Delete Account */}
     <DeleteAccount />
    </>
  )
}