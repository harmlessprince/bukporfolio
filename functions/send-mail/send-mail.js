// functions/send-mail.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});


exports.handler = async function (event, context) {
    // Parse incoming request (assuming JSON format)
    const {from, subject, text, html} = JSON.parse(event.body);

    // Define email options
    const mailOptions = {
        from: from, // Sender's address
        to: process.env.ADMIN_EMAIL, // Recipient's address
        subject: subject,
        // text: text, // Plain text body
        html: html, // HTML body
    };

    try {
        // Send the email using Nodemailer
        let info = await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Email sent successfully',
                info: info,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Failed to send email',
                error: error.message,
            }),
        };
    }
};
