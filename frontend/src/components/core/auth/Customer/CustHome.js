import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CustHome = () => {
  const { user } = useSelector((state) => state.profile)
  const navigate=useNavigate();

  return (
    <div>
      <h1>My Profile</h1>
      <img
        src={user?.image}
      />
      <p>{user?.firstName + " "+user?.lastName}</p>
      <p>{user?.email}</p>
      <p>{user?.additionalDetails?.about ?? "Write Something About Yourself"}</p>
    </div>
  )
}

export default CustHome