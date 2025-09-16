const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  skills: [
    {
      profession: { type: String, required: true }
    }
  ],
  hourlyRate: { type: Number, required: true },
  rating: { type: Number, required: true },
  availability: { type: String, required: true },
  distance: { type: Number, required: true }
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
