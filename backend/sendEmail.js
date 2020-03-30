const nodemailer = require('nodemailer');
const options = require('./options.json');

const sendEmail = async (name, fromEmail, msg) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: options.email,
      clientId: options.gmailClientId,
      clientSecret: options.gmailClientSecret,
      refreshToken: options.gmailRefreshToken,
      accessToken: options.gmailAccessToken
    }
  });
  const mailOptions = {
    from: fromEmail,
    to: options.email,
    subject: `Inquiry from personal website`,
    text: `Name: ${name}\nEmail: ${fromEmail}\nBody:\n${msg}`
  };

  return await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;