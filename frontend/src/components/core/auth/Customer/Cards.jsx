import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThekedarConfirmation from '../thekedar/ThekedarConfirmation';

// Shared Tailwind CSS classes
const profileImageClass = "h-24 w-24 rounded-full mr-4";
const textClass = " text-xl font-bold text-black-600 dark:text-black-400";
const textDarkClass = "text-xl text-black-800 dark:text-black-100";
const flexSpaceClass = "flex items-center space-x-4";

const ProfileCard = ({ title, location, majdoors, image, thekedarId }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleNavigate = () => {
        setShowConfirmation(true);
    };

    return (
     <div className="container row ">   <div className="relative max-w-lg  bg-white dark:bg-black-800 rounded-lg  shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden ${colorClass} p-8">
     <div className="flex items-center mb-4">
         <img className={profileImageClass} src={image || "https://placehold.co/48x48"} alt="Profile Image" crossOrigin="anonymous" />
         <div>
             <p className={`text-3xl font-bold ${textDarkClass}`}>{title}</p>
             <p className={textClass}>Location: {location}</p>
            
         </div>
     </div>
     <p className={`${textDarkClass} mb-4`}>
     Expert contractor with years of experience. Skilled in various construction projects. High-quality work guaranteed.
     </p>
     <div className="flex justify-between items-center">
         <div className={`flex ${flexSpaceClass} ${textClass}`}>
            
             <div className="flex items-center space-x-1">
             <p className={textClass}>Majdoors Working: </p>
                 <span className="text-blue-500">+{majdoors}</span>
             </div>
         </div>
     </div>
     <br />
     <hr />
     <div className="center mt-3 m-2">
         <button onClick={handleNavigate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Book Now
         </button>
     </div>

     {/* Conditionally render confirmation component */}
     {showConfirmation && <ThekedarConfirmation thekedarId={thekedarId} title={title} location={location} onClose={() => setShowConfirmation(false)} />}
 </div></div>
    );
};

export default ProfileCard;
