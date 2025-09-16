const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Worker = require('./models/Worker'); 
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Quicker API!');
});
app.post('/api/workers', async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).json(worker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get('/api/workers', async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
mongoose.connect('mongodb+srv://admin:admin@cluster0.u3oudcn.mongodb.net/Quicker?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
