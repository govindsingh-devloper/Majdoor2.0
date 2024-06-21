// import { useRef, useState } from 'react';

// const SoundRecorder = () => {

//   const audioChunks = useRef([]); //for audio data stream
//   const [recordings, setRecordings] = useState([]);
//   const mediaRecorderRef = useRef(null);
//   const [streamRecording,setStreamRecording] = useState(false);

//   const startRec = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true});

//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (e) => {
//         if(e.data.size > 0){
//           audioChunks.current.push(e.data);
//         }
//       }; 
     
//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunks.current, { type : 'audio/wav'});
//         const audioUrl = URL.createObjectURL(audioBlob);

//         setRecordings((prevRecs) => [...prevRecs, audioUrl]);
//       };

//       mediaRecorderRef.current = mediaRecorder;
//       mediaRecorder.start();
//       setStreamRecording(true);
//     } catch (error) {
//       console.error("Error accessing the microphone:", error);
//     }
//   };

//   const stopRec = () => {
//     if(mediaRecorderRef.current && 
//       mediaRecorderRef.current.state === 'recording'
//     ) {
//       mediaRecorderRef.current.stop();
//       setStreamRecording(false);
//     }
//   };

//   return (
//     <div>
//       <h3>Send Audio Notes</h3>
//       {!streamRecording ? (
//         <button onClick={startRec}>Start Recording</button>
//       ) : (
//         <button onClick={stopRec}>Stop Recording</button>
//       )}
//       {recordings.map((recUrl, index) => {
//           return (
//             <div key={index}>
//               <audio controls src={recUrl} />
//               <a href={recUrl} download={`recording-${index}.wav`}>
//                 Download
//               </a>
//             </div>  
//           );
//         })}
//     </div>
//   );
// };

// export default SoundRecorder;



// // // 
// //src/AudioRecorder.js
// // import React, { useState, useEffect } from 'react';

// // const AudioRecorder = ({ onSave }) => {
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [mediaRecorder, setMediaRecorder] = useState(null);
// //   const [audioBlob, setAudioBlob] = useState(null);

// //   useEffect(() => {
// //     if (mediaRecorder) {
// //       mediaRecorder.ondataavailable = (e) => {
// //         const blob = new Blob([e.data], { type: 'audio/wav' });
// //         setAudioBlob(blob);
// //         onSave(blob);
// //       };
// //     }
// //   }, [mediaRecorder, onSave]);

// //   const startRecording = async () => {
// //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //     const recorder = new MediaRecorder(stream);
// //     setMediaRecorder(recorder);
// //     recorder.start();
// //     setIsRecording(true);
// //   };

// //   const stopRecording = () => {
// //     mediaRecorder.stop();
// //     setIsRecording(false);
// //   };

// //   return (
// //     <div>
// //       <button onClick={isRecording ? stopRecording : startRecording}>
// //         {isRecording ? 'Stop Recording' : 'Start Recording'}
// //       </button>
// //       {audioBlob && <audio src={URL.createObjectURL(audioBlob)} controls />}
// //     </div>
// //   );
// // };

// // export default AudioRecorder;


// import { useRef, useState } from 'react';
// import axios from 'axios';
// const PORT=process.env.PORT ||4000;

// const SoundRecorder = () => {
//   const audioChunks = useRef([]); // For audio data stream
//   const [recordings, setRecordings] = useState([]);
//   const mediaRecorderRef = useRef(null);
//   const [streamRecording, setStreamRecording] = useState(false);

//   const startRec = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (e) => {
//         if (e.data.size > 0) {
//           audioChunks.current.push(e.data);
//         }
//       };

//       mediaRecorder.onstop = async () => {
//         const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
//         const audioUrl = URL.createObjectURL(audioBlob);

//         // Upload the audio blob to the backend
//         const formData = new FormData();
//         formData.append('audio', audioBlob, 'recording.wav');

//         try {
//           const response = await axios.post(`http://localhost:${PORT}/upload`, formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           });
//           console.log(response.data); // Log the response from the server
//         } catch (error) {
//           console.error('Error uploading file:', error);
//         }

//         setRecordings((prevRecs) => [...prevRecs, audioUrl]);
//         audioChunks.current = [];
//       };

//       mediaRecorderRef.current = mediaRecorder;
//       mediaRecorder.start();
//       setStreamRecording(true);
//     } catch (error) {
//       console.error("Error accessing the microphone:", error);
//     }
//   };

//   const stopRec = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
//       mediaRecorderRef.current.stop();
//       setStreamRecording(false);
//     }
//   };

//   return (
//     <div>
//       <h3>Send Audio Notes</h3>
//       {!streamRecording ? (
//         <button onClick={startRec}>Start Recording</button>
//       ) : (
//         <button onClick={stopRec}>Stop Recording</button>
//       )}
//       {recordings.map((recUrl, index) => (
//         <div key={index}>
//           <audio controls src={recUrl} />
//           <a href={recUrl} download={`recording-${index}.wav`}>
//             Download
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SoundRecorder;




import { useRef, useState } from 'react';
import axios from 'axios';

const PORT=process.env.PORT ||4000;

const SoundRecorder = () => {
  const audioChunks = useRef([]);
  const [recordings, setRecordings] = useState([]);
  const mediaRecorderRef = useRef(null);
  const [streamRecording, setStreamRecording] = useState(false);

  const startRec = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunks.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');

        try {
          const response = await axios.post(`http://localhost:${PORT}/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          setRecordings((prevRecs) => [...prevRecs, response.data.audioUrl]);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setStreamRecording(true);
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRec = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setStreamRecording(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Send Audio Notes</h3>
    {!streamRecording ? (
      <button
        onClick={startRec}
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Start Recording
      </button>
    ) : (
      <button
        onClick={stopRec}
        className="bg-red-500 text-white rounded-md px-4 py-2"
      >
        Stop Recording
      </button>
    )}
    {recordings.map((recUrl, index) => (
      <div key={index} className="mt-4">
        <audio controls className="mb-2" src={recUrl} />
        <a
          href={recUrl}
          download={`recording-${index}.wav`}
          className="text-blue-500 hover:underline"
        >
          Download
        </a>
      </div>
    ))}
  </div>
  
  );
};

export default SoundRecorder;

