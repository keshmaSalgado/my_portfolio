import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors());
async function sendEmail({ email, message, name }) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
};

// Route to handle contact form submission
app.post('/send-email', async (req, res) => {
    const { email, message, name } = req.body;
    const result = await sendEmail({ email, message, name });

    if (result.success) {
        res.status(200).send('Email sent successfully!');
    } else {
        res.status(500).send('Failed to send email');
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));


