import React, { useState } from 'react';
import majdoor_icon from '../../../../images/default_majdoor.png';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AudioUploadForm from './AudioUploadForm';
import SoundRecorder from './AudioRecorder';
import "../../../../css/Audio.css";
import { Link } from 'react-router-dom';
import FetchAudio from './FetchAudio';
import AudioPlayer from './FetchAudio';






const sharedClasses = {
  bgZinc100: 'bg-zinc-100', // Light background for the overall layout
  bgWhite: 'bg-white', // White background for cards
  shadowLg: 'shadow-lg', // Shadow for cards
  roundedLg: 'rounded-lg', // Rounded corners for cards
  overflowHidden: 'overflow-hidden', // Hide overflow in cards
  p4: 'p-4', // Padding inside cards
  textLg: 'text-lg', // Large text size for headings
  fontSemibold: 'font-semibold', // Semi-bold font weight for headings
  textZinc800: 'text-zinc-800', // Dark text color for high contrast on light background
  textSm: 'text-sm', // Small text size for details
  mt4: 'mt-4', // Margin top for spacing between elements
  flex: 'flex', // Flexbox layout for positioning elements
  justifyBetween: 'justify-between', // Space between elements horizontally
  bgBlue500: 'bg-blue-500', // Blue background for call button
  bgGreen500: 'bg-green-500', // Green background for hire button
  p2: 'p-2', // Padding for buttons
  rounded: 'rounded-lg', // Rounded corners for buttons
  bgPurple500: 'bg-purple-500',
  textPurple500: 'text-purple-500',
};



const SearchMajdoor = () => {
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const searchresults = location.state?.searchresults;


  return (


    <div className={`flex flex-row flex-wrap items-start justify-start mt-8 mx-4  ${sharedClasses.bgZinc100} ${sharedClasses.bgZinc800}`}>
      {searchresults && searchresults.map(profile => (
        <div key={profile._id} className={`m-2 ${sharedClasses.bgWhite} ${sharedClasses.shadowLg} ${sharedClasses.roundedLg} ${sharedClasses.overflowHidden}`}>
          <img src={profile?.image ? profile.image : 'https://placehold.co/300'} alt={profile?.firstName || 'Profile Photo'} className="w-full h-48 object-cover" />
          <div className={sharedClasses.p4}>
            <h2 className={`${sharedClasses.textLg} ${sharedClasses.fontSemibold} ${sharedClasses.textZinc800} ${sharedClasses.textWhite}`}>{profile.firstName}</h2>
            <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc600} ${sharedClasses.textZinc300}`}>Skills: {profile.skills}</p>
            <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc600} ${sharedClasses.textZinc300}`}>Contact: {profile.phoneNumber}</p>
            <div className={`${sharedClasses.mt4} ${sharedClasses.flex} ${sharedClasses.justifyBetween}`}>
              <a href={`tel:${profile.phoneNumber}`} className={`${sharedClasses.bgBlue500} ${sharedClasses.textWhite} ${sharedClasses.p2} ${sharedClasses.rounded}`}>
                <FontAwesomeIcon icon={faPhone} /> Call
              </a>
              <Link to={`/searchMajdoor/${profile._id}`} className={`${sharedClasses.bgGreen500} ${sharedClasses.textWhite} ${sharedClasses.p2} ${sharedClasses.rounded}`}>Hire</Link>
            </div >
            {/* <div className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'> */}
            <div className="App">
              {/* <header className="App-header"> */}
              {/* <h1 className="text-gray-700 mb-2">Send Audio Notes</h1> */}<br />
              {/* <button><SoundRecorder /></button><br/>
          <AudioPlayer /> <br/> */}
            </div>

            <div className={`${sharedClasses.mt4} ${sharedClasses.flex} ${sharedClasses.justifyBetween}`}>
              <button id="send-audio" className={`${sharedClasses.mt4} ${sharedClasses.bgPurple500} ${sharedClasses.textWhite} ${sharedClasses.p2} ${sharedClasses.rounded}`}>
                {/* Send Audio Notes */}
                <button><AudioUploadForm /></button>

              </button>
              <div className={`${sharedClasses.mt4} ${sharedClasses.bgPurple500} ${sharedClasses.textWhite} ${sharedClasses.p2} ${sharedClasses.rounded}`}>   <FetchAudio /></div>

            </div>

          </div >
        </div >
      ))}
    </div >
  )
}

export default SearchMajdoor;
