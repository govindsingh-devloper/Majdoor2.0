// // src/AudioUploadForm.js
// import React, { useState } from 'react';
// import AudioRecorder from './AudioRecorder';

// const AudioUploadForm = () => {
//   const [audioURL, setAudioURL] = useState(null);

//   const handleSave = (blob) => {
//     setAudioURL(null); // Reset the audio URL when a new recording is made
//     uploadToServer(blob);
//   };

//   const uploadToServer = async (blob) => {
//     const formData = new FormData();
//     formData.append('file', blob);

//     try {
//       const response = await fetch('http://localhost:3000/upload', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       setAudioURL(data.url);
//       alert('Audio uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading audio:', error);
//       alert('Error uploading audio');
//     }
//   };

//   return (
//     <div>
//       <AudioRecorder onSave={handleSave} />
//       {audioURL && (
//         <div className="upload-info">
//           <p>Uploaded Audio:</p>
//           <audio src={audioURL} controls />
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioUploadForm;


import React, { useState } from 'react';
import AudioRecorder from './AudioRecorder';
const PORT=process.env.PORT ||4000;

const AudioUploadForm = () => {
  const [audioURL, setAudioURL] = useState(null);

  const handleSave = (blob) => {
    uploadToServer(blob);
  };

  const uploadToServer = async (blob) => {
    const formData = new FormData();
    formData.append('audio', blob);

    try {
      const response = await fetch(`http://localhost:${PORT}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      setAudioURL(data.secure_url); // Assuming Cloudinary or similar service response
      alert('Audio uploaded successfully');
    } catch (error) {
      console.error('Error uploading audio:', error);
      alert('Error uploading audio');
    }
  };

  return (
    <div>
      <AudioRecorder onSave={handleSave} />
      {audioURL && (
        <div className="upload-info">
          <p>Uploaded Audio:</p>
          <audio src={audioURL} controls />
        </div>
      )}
    </div>
  );
};

export default AudioUploadForm;
