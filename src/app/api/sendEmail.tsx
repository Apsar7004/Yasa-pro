
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, from, to, when } = req.body;

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
        text: `
          Name: ${name}
          Phone: ${phone}
          From: ${from}
          To: ${to}
          When: ${when}
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
