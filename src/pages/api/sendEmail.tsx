
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, from, to, when } = req.body;

    try {
      
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user:'m.apsar0786@gmail.com', 
          pass:'omrk gnde ejdy yquq',
        },
      });

      // Define email content
      let mailOptions = {
        from:'m.apsar0786@gmail.com', // Sender address
        to: 'm.apsar0786@gmail.com',
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
