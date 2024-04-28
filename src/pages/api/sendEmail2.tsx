
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { agent_name,agency_name, phone,mail, from,places,arrival_date,total_days, to,total_seats,trip} = req.body;
   

    try {
      
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user:process.env.nodemailer_mail, 
          pass:process.env.nodemailer_key,
        },
      });

      // Define email content
      let mailOptions = {
        from:process.env.nodemailer_mail, // Sender address
        to: process.env.nodemailer_mail,
        subject: 'Booking',
        html: `
        <h2>Booking Details</h2>
        <p><strong>Agent Name:</strong> ${agent_name}</p>
        <p><strong>Agency Name:</strong> ${agency_name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Trip Type: ${trip}</strong></p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Passangers count:</strong> ${total_seats}</p>
        <p><strong>Arrival Date:</strong> ${arrival_date}</p>
        <p><strong>Total Days:</strong> ${total_days}</p>
        <p><strong>Places:</strong> ${places}</p>
      `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Send success response
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      // Send error response
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Send error for non-POST requests
    res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }
}
