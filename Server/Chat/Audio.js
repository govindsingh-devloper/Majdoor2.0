const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

const app = express();

dotenv.config();

app.use(cors()); // Allow CORS for all routes

// Configure Cloudinary
// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.API_KEY,
//     api_secret:process.env.API_SECRET,
// })

// Configure multer storage with Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'audio_uploads',
//     resource_type: 'video', // Necessary for audio files
//   },
// });

// const upload = multer({ storage: storage });

// // Endpoint to handle file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (req.file && req.file.path) {
//     res.json({ url: req.file.path });
//   } else {
//     res.status(400).send('Upload failed');
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// app.post('/upload', upload.single('audio'), async (req, res) => {
//     try {
//         const result = await cloudinary.uploader.upload_stream(
//             { resource_type: 'video' }, // Treat audio as video for Cloudinary
//             (error, result) => {
//                 if (error) return res.status(500).send(error);
//                 res.status(200).send(result);
//             }
//         ).end(req.file.buffer);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'video' },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(req.file.buffer);
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});