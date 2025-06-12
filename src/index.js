import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

// Load environment variables from .env file
dotenv.config({
    path: './env'
});

// Attach error handler before starting the server
app.on('error', (err) => {
    console.error('Express server error:', err);
    throw err;
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  