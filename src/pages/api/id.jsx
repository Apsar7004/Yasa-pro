import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/dbConnect';
import { Vehicle } from '../../models/SchemasforDb'; // Assuming you have a Mongoose model for images

// Configure multer for file uploads


// API route handler
export default async function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.params.id);
//     // Connect to MongoDB
//     await connectDB();
    

//     try {
//       // Find user by email
//       const user = await Vehicle.find()
    
//       if (!user) {
//         // User not found
//         return res.status(404).json({ message: 'User not found' });
//       }
//       // If email and password match
//       return res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//       // Error while processing
//       return res.status(500).json({ message: 'Internal server error' });
//     }
   } 

}

