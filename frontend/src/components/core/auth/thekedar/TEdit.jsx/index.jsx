import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'


export default function TEdit() {
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