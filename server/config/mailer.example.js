const nodemailer = require('nodemailer');

// Copy this file to mailer.js and set the env variables below.
// Never commit mailer.js — it is git-ignored.
const SMTP_USER = process.env.SMTP_USER; // your Gmail address
const SMTP_PASS = process.env.SMTP_PASS; // Gmail App Password

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

module.exports = { transport, SMTP_USER };
