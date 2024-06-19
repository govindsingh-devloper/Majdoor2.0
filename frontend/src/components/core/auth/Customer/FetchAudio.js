import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomAudioPlayer from '../Customer/AudioPlayer';
const PORT=process.env.PORT ||4000;

const AudioPlayer = () => {
  const [audios, setAudios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const response = await axios.get(`http://localhost:${PORT}/audios`);
        setAudios(response.data);
      } catch (error) {
        console.error('Error fetching audios:', error);
        setError('Failed to fetch audios');
      }
    };

    fetchAudios();
  }, []);

//   return (
//     <div>
//       <h3>Received Audio Notes</h3>
//       {audios.map((audio, index) => (
//         <div key={index}>
//           <audio controls src={audio.audioUrl} />
//         </div>
//       ))}
//     </div>
//   );
// };

return (
    <div>
      <h3>Received Audio Notes</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {audios.length === 0 && !error && <p>No audio notes available</p>}
      {audios.map((audio, index) => (
        <div key={index}>
          <CustomAudioPlayer audioUrl={audio.audioUrl} />
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
