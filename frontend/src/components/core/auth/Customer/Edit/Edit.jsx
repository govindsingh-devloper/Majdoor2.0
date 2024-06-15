import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'

const Edit = () => {
  return (
    <div>
    <h1>Update Profile</h1>
        <ChangeProfilePicture/>
        <EditProfile/>
        <DeleteAccount/>
    </div>
  )
}

export default Edit