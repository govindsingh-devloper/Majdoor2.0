// import React, { useState, useRef } from 'react';

// const CustomAudioPlayer = ({ audioUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <button onClick={togglePlayPause}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <audio ref={audioRef} src={audioUrl} />
//     </div>
//   );
// };

// export default CustomAudioPlayer;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
//import CustomAudioPlayer from './CustomAudioPlayer'; // Make sure the path is correct

const PORT=process.env.PORT ||4000;

const AudioPlayer = () => {
  const [audios, setAudios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const response = await axios.get(`http://localhost:${PORT}/audios`); // Ensure the correct port
        setAudios(response.data);
      } catch (error) {
        console.error('Error fetching audios:', error);
        setError('Failed to fetch audios');
      }
    };

    fetchAudios();

    const socket = io(`http://localhost:${PORT}`);

    socket.on('new-audio', (data) => {
      setAudios((prevAudios) => [...prevAudios, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Received Audio Notes</h3>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {audios.length === 0 && !error && <p>No audio notes available</p>}
    {audios.map((audio, index) => (
      <div key={index} className="mt-4">
        {/* <CustomAudioPlayer audioUrl={audio.audioUrl} /> */}
      </div>
    ))}
  </div>
  

  );
};

export default AudioPlayer;
