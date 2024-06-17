// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://govind2022:pVRH5gH1SAhJIpKo@cluster0.by4uubx.mongodb.net/Majdoor', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for the audio files
const audioSchema = new mongoose.Schema({
    filename: String,
    data: Buffer,
    contentType: String
});

const Audio = mongoose.model('Audio', audioSchema);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint to upload audio file
app.post('/upload', upload.single('audio'), (req, res) => {
    const newAudio = new Audio({
        filename: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype
    });

    newAudio.save()
        .then(() => res.status(200).send('File uploaded successfully'))
        .catch(err => res.status(500).send('Failed to upload file'));
});

// Endpoint to fetch audio file by ID
// app.get('/audio/:id', (req, res) => {
//     Audio.findById(req.params.id, (err, audio) => {
//         if (err) return res.status(500).send(err);
//         if (!audio) return res.status(404).send('Audio not found');

//         res.set('Content-Type', audio.contentType);
//         res.send(audio.data);
//     });
// });

app.get('/audios', async (req, res) => {
    try {
      const audios = await Audio.find();
      res.status(200).json(audios);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch audios' });
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
