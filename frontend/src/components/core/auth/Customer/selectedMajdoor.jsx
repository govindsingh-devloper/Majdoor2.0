import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleService } from '../../../../services/operations/MajdoorAuthAPI';
import AudioUploadForm from './AudioUploadForm';
import FetchAudio from './FetchAudio';
import "../../../../css/Audio.css";
import SoundRecorder from './AudioRecorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../../../css/SelecterMajdoor.css";



const cardContainerClasses = 'bg-white light:bg-zinc-800 rounded-lg shadow-lg p-6 mx-auto max-w-md'
const textClasses = 'text-sm text-zinc-600 light:text-zinc-400'
const buttonClasses = 'text-white p-2 rounded-lg'




const SelectedMajdoor = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleService = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getSingleService(id);
        setResponse(res);
      } catch (error) {
        setError('Error fetching service details');
        console.error("Error fetching service details:", error);
      }
      setLoading(false);
    };

    if (id) {
      fetchSingleService();
    }
  }, [id]);

  const handleConfirmSelection = () => {


    if (response) {
      navigate("/MajdoorConfirmation", { state: { response } });
    }
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (!response) {
    return <p className="text-center text-lg">No response received</p>;
  }

  return (
    <>
      <div className="container">
        <div className={cardContainerClasses}>
          <div className="flex items-center justify-between mb-4">

            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`} class="profile-pic w-24 h-24 rounded-full mr-4" />
            <div class="name text-lg font-bold"> {response.data.firstName} {response.data.lastName}</div>
          </div>
          <div class="card-body p-4">
            <div class="skill mb-2">Skill: {response.data.skills}</div>
            {/* <div class="contact mb-2">Contact: ****</div> */}
            <div class="location mb-2">Location: Delhi</div>
            <div class="ratings mb-2">Ratings: 4.5 ★</div>
          </div>
          <div class="card-footer p-4 flex flex-col items-center">
            <div class="audio-controls flex space-x-2 mb-2">
              <button id="recordBtn" onclick="startRecording()" class="bg-red-500 text-white px-4 py-2 rounded">🔴 Record</button>
              <button id="stopBtn" onclick="stopRecording()" class="bg-gray-500 text-white px-4 py-2 rounded">⏹ Stop</button>
              <button id="sendBtn" onclick="sendRecording()" class="bg-blue-500 text-white px-4 py-2 rounded">✉ Send</button>
            </div>
            <div id="error-message" class="error-message text-red-500 text-sm mt-2"></div>
            <button class="confirm-booking bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700" onClick={handleConfirmSelection} >Confirm Booking</button>
          </div>
        </div></div>


      {/* <div className="container mx-auto p-4" style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>First Name: {response.data.firstName}</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Last Name: {response.data.lastName}</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Skill: {response.data.skills}</p>
          <button onClick={handleConfirmSelection} style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
            Confirm Booking
          </button> */}
      {/* <div className="mt-4">
         
          <AudioUploadForm profileId={id} />
          <FetchAudio profileId={id} />
          
        </div> */}
      {/* </div> */}
      {/* // </div> */}
      {/* // <div className="container">
      //   <div className={cardContainerClasses}>
      //     <div className="flex items-center justify-between mb-4">
      //       <h2 className="text-lg font-semibold"> {response.data.firstName} {response.data.lastName}</h2>
      //       <img className="w-12 h-12 rounded-full" src="https://api.dicebear.com/5.x/initials/svg?seed= {response.data.firstName} {response.data.lastName}" alt="Worker Image" />
      //     </div>
      //     <p className={textClasses}>Skills: {response.data.skills}</p>
      //     <p className={textClasses}>Contact: {response.data.contactNumber}</p>
      //     <p className={textClasses}>Location: {response.data.location}</p>
      //     <div className="flex items-center">
      //       <img className="w-4 h-4 mr-2" src="/icons/star.svg" alt="Ratings" />
      //       <p className={textClasses}>4.5 (123 reviews)</p>
      //     </div>
      //     <div className="mt-4">
      //       <button className={`bg-blue-500 ${buttonClasses} mr-2`}>Record Audio</button>
      //       <button className={`bg-red-500 ${buttonClasses} mr-2`}>Stop Recording</button>
      //       <button className={`bg-green-500 ${buttonClasses}`}>Send Audio</button>
      //     </div>
      //     <p className="text-red-500 text-sm mt-2">Error: Recording failed. Please try again.</p>
      //   </div>
      // </div> */}


    </>


  );
};

export default SelectedMajdoor;
