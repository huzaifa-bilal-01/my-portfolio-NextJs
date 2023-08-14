import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const fromEmail = process.env.GMAIL_USER;
const fromPassword = process.env.GMAIL_PASS;
const receiveEmail = process.env.RECEIVE_EMAIL;

const sendEmailNotification = async (newMessage) => {
  // Create a transporter with your Gmail account settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: fromEmail,
      pass: fromPassword,
    },
  });

  // Define the email options
  const mailOptions = {
    from: fromEmail,
    to: receiveEmail,
    subject: 'New contact form submission',
    text: `
      Email: ${newMessage.email}
      Subject: ${newMessage.subject}
      Message: ${newMessage.message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully!');
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;
    if (!email || !email.includes('@') || !subject || subject.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      subject,
      message,
    };

    let client;

    const connectionString = process.env.MONGODB_URI;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db('my-portfolio');
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;

      // Send email notification
      await sendEmailNotification(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    client.close();
    res.status(201).json({ message: 'Successfully stored message', message: newMessage });
  }
}
