import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from environment variables
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MondoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}

// Export the connectDB function for use in other modules
export default connectDB;