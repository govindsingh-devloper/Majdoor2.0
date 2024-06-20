import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThekedarConfirmation from '../thekedar/ThekedarConfirmation';
import { useState } from 'react';

// Shared Tailwind CSS classes
const profileImageClass = "h-16 w-16 rounded-full mr-4";
const textClass = "text-black-600 dark:text-black-400";
const textDarkClass = "text-black-800 dark:text-black-100";
const flexSpaceClass = "flex items-center space-x-1";

const ProfileCard = ({title,location,majdoors,image,thekedarId}) => {
    const navigate=useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleNavigate = () => {
        setShowConfirmation(true)
        // const navigationUrl = '/ThekedarConfirmation';

        // // Navigate to the specified route and pass the props in the state
        // navigate(navigationUrl, { state: { thekedarId, title,location} });
    
      };
    // const defaultImage = 'https://placehold.co/48x48';
    return (
        <div className="max-w-sm mx-auto bg-white Light:bg-black-800 rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
                <img className={profileImageClass} src="https://placehold.co/48x48" alt="Profile Image" crossorigin="anonymous" />
                <div>
                    <p className={`text-lg font-semibold ${textDarkClass}`}>{title}</p>
                    <p className={textClass}>Location: {location}</p>
                    <p className={textClass}>Majdoors Working: {majdoors}</p>
                </div>
            </div>
            <p className={`${textDarkClass} mb-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa ipsum, laoreet quis mollis nec, feugiat in dui. Suspendisse et enim pretium, ullamcorper enim laoreet.
            </p>
            <p className={`${textClass} mb-4`}>
                Location : <span className="text-blue-500">Delhi</span>
            </p>
            <div className="flex justify-between items-center">
                <div className={`flex ${flexSpaceClass} ${textClass}`}>
                    <div className="flex items-center space-x-1">
                        <img aria-hidden="true" alt="comment" src="https://placehold.co/16x16" crossorigin="anonymous" />
                        <span>18</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img aria-hidden="true" alt="like" src="https://placehold.co/16x16" crossorigin="anonymous" />
                        <span>7</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img aria-hidden="true" alt="share" src="https://placehold.co/16x16" crossorigin="anonymous" />
                        <span>2</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img aria-hidden="true" alt="group" src="https://placehold.co/32x16" crossorigin="anonymous" />
                        <span className="text-blue-500">+20</span>
                    </div>
                    
                </div>
                
            </div>

<div className=" center mt-3 m-1">  <button onClick={handleNavigate}
 class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Book Now
    </button></div>

      {/* Conditionally render confirmation component */}
      {showConfirmation && <ThekedarConfirmation thekedarId={thekedarId} title={title} location={location} />}
            
        </div>
    );
};

export default ProfileCard;
