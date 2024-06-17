import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AudioPlayer = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/audios');
        setAudios(response.data);
      } catch (error) {
        console.error('Error fetching audios:', error);
      }
    };

    fetchAudios();
  }, []);

  return (
    <div>
      <h3>Received Audio Notes</h3>
      {audios.map((audio, index) => (
        <div key={index}>
          <audio controls src={audio.audioUrl} />
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
