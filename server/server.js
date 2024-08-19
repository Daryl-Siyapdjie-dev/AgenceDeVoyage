import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 3001,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true
  },
});

// Route pour envoyer un email
app.post('/api/send-email', [
  body('nom').notEmpty().withMessage('Le nom est requis'),
  body('tel').isMobilePhone().withMessage('Numéro de téléphone invalide'),
  body('email').isEmail().withMessage('Email invalide'),
  body('objet').notEmpty().withMessage('L\'objet est requis'),
  body('message').notEmpty().withMessage('Le message est requis')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nom, tel, email, objet, message } = req.body;

  const output = `
    <h1>Vous avez un nouveau message de contact</h1>
    <p><strong>Nom:</strong> ${nom}</p>
    <p><strong>Tel:</strong> ${tel}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Objet:</strong> ${objet}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const mailOptions = {
    from: process.env.EMAIL,
    replyTo: email,
    to: process.env.EMAIL,
    subject: `Contact Form: ${objet}`,
    text: `Nom: ${nom}\nTel: ${tel}\nEmail: ${email}\nMessage:\n${message}`,
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return res.status(500).send({ error: "Erreur lors de l'envoi du message." });
    }
    console.log('Email envoyé:', info.response);
    res.status(200).send({ message: 'Message envoyé avec succès !' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
