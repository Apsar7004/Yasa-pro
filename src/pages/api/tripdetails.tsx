
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/dbConnect';
import { Trip } from '../../models/SchemasforDb'; // Assuming you have a Mongoose model for images

// Configure multer for file uploads


// API route handler
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Connect to MongoDB
    await connectDB();
    

    try {
      // Find user by email
      const user = await Trip.find()
    
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
      const newTrip = new Trip({
        vehicleId: req.body.vehicleId,
        vehicleType: req.body.vehicleType,
        manager: req.body.manager,
        driver: req.body.driver,
        driverId : req.body.driverId,
        payableAmount: req.body.payableAmount,
        assignVehicle:req.body.assignVehicle,
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        email : req.body.email,
        dob : req.body.dob,
        nidNumber : req.body.nidNumber,
        pickup:req.body.pickup,
        drop : req.body.drop,
        timeDate : req.body.timeDate 
      });

        await newTrip.save();

        return res.status(200).json({ message: 'Trip created successfully'});
      }
     catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Trip not created' });
  }
}
