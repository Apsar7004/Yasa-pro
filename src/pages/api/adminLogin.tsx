// pages/api/login.js
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/dbConnect';
import {Login} from '../../models/SchemasforDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { mail, phone } = req.body;

    let email = mail;
    let password = phone;

    console.log(email,password);
    // Connect to MongoDB
    await connectDB();
    

    try {
      // Find user by email
      const user = await Login.findOne({email})
    
      if (!user) {
        // User not found
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if password matches
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      

      if (!isPasswordMatch) {
        // Incorrect password
        return res.status(401).json({ message: 'Incorrect password' });
      }

      // If email and password match
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      // Error while processing
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
