import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, date, phone, time, guests, diet, children } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Les variables d\'environnement EMAIL_USER ou EMAIL_PASS ne sont pas définies');
      return res.status(500).json({ error: 'Erreur de configuration du serveur' });
    }

    // Convertir et formater la date
    const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Nouvelle Réservation',
      text: `
        Nom: ${name}\n
        Date: ${formattedDate}\n
        Numéro de Téléphone: ${phone}\n
        Heure: ${time}\n
        Nombre de Couverts: ${guests}\n
        Régime Particulier: ${diet.join(', ')}\n
        Enfants: ${children}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
