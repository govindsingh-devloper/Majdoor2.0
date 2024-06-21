import React from 'react';
import { useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
import { useNavigate } from 'react-router-dom';
import { RiEditBoxLine } from 'react-icons/ri';

const ThekedarProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-zinc-100 dark:bg-white-800">
      <div className="flex items-center mb-4">
        <a href="#" className="text-blue-500">डैशबोर्ड</a>
        <span className="mx-2 text-zinc-500">/</span>
        <span className="text-zinc-500">मेरा डैशबोर्ड</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <div className="h-20 w-20 relative">
            <img
              className="h-20 w-20 object-cover rounded-full"
              src={user?.image}
              alt="User Profile"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold">{user.firstName}</h1>
          <h2 className="text-zinc-500 dark:text-zinc-400 mb-2">मेरा परिचय</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            {user?.additionalDetails?.about || 'Write something about yourself'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ... other profile details ... */}
          </div>
          <IconBtn text="Edit" onClick={() => navigate("/ThekedarDashboard/Edit")}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-zinc-500 dark:text-zinc-400 mb-2">मेरी गैलरी</h2>
        <div className="flex items-center">
          <img src="https://placehold.co/100x100" alt="Gallery Image" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default ThekedarProfile;
