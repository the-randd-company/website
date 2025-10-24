const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'randd.github@gmail.com', // substitute email
    pass: 'your-app-password'     // Use App Password, NOT your regular password
  }
});

// Email configuration
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com', // Sending to yourself
  subject: 'Test Email from JavaScript',
  text: 'This is a test email sent from JavaScript!',
  html: '<h1>Test Email</h1><p>This is a test email sent from JavaScript!</p>'
};

// Send email
async function sendEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();