import React from 'react'
import "../../../../css/style.css";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RiEditBoxLine } from "react-icons/ri"
import { formattedDate } from "../../../../utilis/dateFormatter"
import IconBtn from '../../../common/IconBtn';

const CustHome = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
<<<<<<< Updated upstream
    <div>
      <h1>My Profile</h1>
      <img
        src={user?.image}
      />
      <p>{user?.firstName + " "+user?.lastName}</p>
      <p>{user?.email}</p>
      <div><p>
        About
      </p>
      <span
            text="Edit"
            onclick={() => {
              navigate("/CustHome/Edit")
            }}
          >
            <RiEditBoxLine />
          </span>
      </div>
      <p>{user?.additionalDetails?.about ?? "Write Something About Yourself"}</p>
      <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/CustHome/Edit")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
          
          <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
            
=======
    <div className="profile-container">
      <div className="profile-image">
        <img src={user?.image} alt="User Profile" />
      </div>
      <div className="profile-details">
        <h1>My Profile</h1>
        <p>{user?.firstName + " " + user?.lastName}</p>
        <p>{user?.email}</p>
        <p>{user?.additionalDetails?.about ?? "Write Something About Yourself"}</p>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default CustHome;

