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

admin.initializeApp();

// Replace with your SendGrid API Key
const SENDGRID_API_KEY = "";
const ADMIN_EMAIL = "musabahmed@gmail.com"; // Email to notify

sgMail.setApiKey(SENDGRID_API_KEY);

exports.notifyAdmin = functions.https.onCall(async (data, context) => {
    const { email } = data;

    if (!email) {
        throw new functions.https.HttpsError("invalid-argument", "Email is required.");
    }

    const msg = {
        to: ADMIN_EMAIL,
        from: "noreply@yourdomain.com",
        subject: "New User Registered",
        text: `A new user has registered with the email: ${email}`,
        html: `<p>A new user has registered with the email: <strong>${email}</strong></p>`,
    };

    try {
        await sgMail.send(msg);
        return { success: true, message: "Admin notified successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new functions.https.HttpsError("internal", "Failed to send email.");
    }
});