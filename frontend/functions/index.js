/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Get credentials from Firebase config
const email = functions.config().smtp.email;
const password = functions.config().smtp.password;

// Configure transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

// Cloud Function to send an email
exports.sendEmail = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: email,
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email sent via Firebase with Nodemailer!',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});
