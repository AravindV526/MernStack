const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 
const Worker = require('./models/Worker'); // Adjust the path based on your file structure

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/quicker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');

    // Worker data to insert
    const workers = [
      { 
        name: 'Maria Garcia', 
        email: 'maria.garcia@example.com', // Added email
        profession: 'Cleaner', 
        rating: 4, 
        distance: 0.8,
        hourlyRate: 25 // Added hourlyRate
      },
      { 
        name: 'Thomas Moore', 
        email: 'thomas.moore@example.com', // Added email
        profession: 'Cleaner', 
        rating: 5, 
        distance: 1.2,
        hourlyRate: 30 // Added hourlyRate
      },
      { 
        name: 'Sarah Johnson', 
        email: 'sarah.johnson@example.com', // Added email
        profession: 'Cleaner', 
        rating: 4, 
        distance: 0.5,
        hourlyRate: 28 // Added hourlyRate
      },
      { 
        name: 'Robert Wilson', 
        email: 'robert.wilson@example.com', // Added email
        profession: 'Cleaner', 
        rating: 4, 
        distance: 1.5,
        hourlyRate: 27 // Added hourlyRate
      },
    ];

    // Insert worker data
    for (const worker of workers) {
      const newWorker = new Worker(worker);
      await newWorker.save(); // Save each worker to the database
    }
    
    console.log('Workers added to database!');
    mongoose.connection.close(); // Close the connection after insertion
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
