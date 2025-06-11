import {v2 as clooudinary} from 'cloudinary';
import fs from 'fs';
// Import the Cloudinary library
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Click 'View API Keys' above to copy your cloud name
        api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
const uploadImage = async (filePath) => {
    try {
        if (!filePath) {
            throw new Error('File path is required');
        }

        const result = await cloudinary.uploader.upload(filePath, {
            //folder: 'your_folder_name', // Optional: specify a folder in your Cloudinary account
            resource_type: "auto" // Specify the resource type
        });

        //file has been uploaded successfully
        console.log('Image uploaded successfully:', result);
        return result; // Return the result for further processing
    }

    catch (error) {
        fs.unlinkSync(filePath); // Delete the file if upload fails
        console.error('Error uploading image:', error);
        throw error; // Rethrow the error for handling in the calling function
    }

}; // Close the uploadImage function expression

// Export the uploadImage function if needed

})(); // Close the IIFE

export { uploadImage };