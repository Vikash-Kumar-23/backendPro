import dotenv from 'dotenv';
import connectDB from './db/index.js';

// Load environment variables from .env file
dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
    console.log('Connected to MongoDB successfully');
})
.catch((error) => {
    app.on('error', (err) => {
        console.error('Express server error:', err);
        throw err;
    });
    console.error('Error connecting to MongoDB:', error);
});

































// Import the environment variables from a .env file
//1st approach
/*
import express from 'express';
const app = express();

(async () => {
  try {
    
    // Connect to MongoDB using the connection string from environment variables
    await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`);
    app.on('error', (err) => {
      console.error('Express server error:', err);
      throw err;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
})();
// Export the mongoose instance for use in other modules

*/