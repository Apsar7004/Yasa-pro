
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/dbConnect';
import { Vehicle } from '../../models/SchemasforDb'; // Assuming you have a Mongoose model for images

// Configure multer for file uploads


// API route handler
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Connect to MongoDB
    await connectDB();
    

    try {
      // Find user by email
      const user = await Vehicle.find()
    
      if (!user) {
        // User not found
        return res.status(404).json({ message: 'User not found' });
      }
      // If email and password match
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      // Error while processing
      return res.status(500).json({ message: 'Internal server error' });
    }
  } 


  else if (req.method === 'POST') {

    await connectDB();

    try{
      const newVehicle = new Vehicle({
        vehicleId: req.body.vehicleId,
        vehicleType: req.body.vehicleType,
        manager: req.body.manager,
        driver: req.body.driver,
        purchaseDate: req.body.purchaseDate,
        image:req.body.img,
        vehicleNumber : req.body.vehicleNumber,
        tripsCount: req.body.tripsCount, 
        licenseNumber: req.body.licenseNumber,
        registration: req.body.registration,
        
      });

        await newVehicle.save();

        return res.status(200).json({ message: 'Image uploaded successfully'});
      }
     catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
