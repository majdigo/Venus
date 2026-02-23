import nodemailer from 'nodemailer';

export interface ConfirmationEmailData {
    to: string;
    firstName: string;
    intervention: string;
    leadRef: string;
}

export async function sendConfirmationEmail(data: ConfirmationEmailData) {
    const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT, FROM_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.warn('[EMAIL] SMTP Configuration is missing. Mock sending confirmation to:', data.to);
        return;
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT || '587'),
        secure: SMTP_PORT === '465', // true for 465, false for other ports
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const mailOptions = {
        from: FROM_EMAIL || '"Venus Estetika" <contact@venus-estetika.com>',
        to: data.to,
        subject: `Votre demande de devis pour ${data.intervention} a bien été reçue`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2>Bonjour ${data.firstName},</h2>
        <p>Merci pour votre demande de devis pour une <strong>${data.intervention}</strong>.</p>
        <p>✅ Votre dossier a été créé avec la référence <strong>${data.leadRef}</strong>.</p>
        <p>✅ Un coordinateur médical francophone va analyser votre demande et vous contactera sous 24h ouvrées.</p>
        
        <p>En attendant, vous pouvez :</p>
        <ul>
          <li><a href="https://venus-estetika.com/temoignages">Découvrir les témoignages de nos patients</a></li>
          <li><a href="https://venus-estetika.com/chirurgiens">Faire connaissance avec nos chirurgiens partenaires</a></li>
          <li><a href="https://venus-estetika.com/sejour-medical">Voir le déroulement du séjour médical en Tunisie</a></li>
        </ul>
        
        <p>À très bientôt,<br/>L'équipe Venus Estetika</p>
        <hr style="border: 1px solid #eee; margin: 40px 0;" />
        <p style="font-size: 12px; color: #888;">
          Venus Estetika | La perfection à portée de vol<br/>
          Tél: +33 1 XX XX XX XX | WhatsApp: +216 XX XXX XXX<br/>
          <a href="https://venus-estetika.com">www.venus-estetika.com</a>
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('[EMAIL] Confirmation sent to:', data.to);
    } catch (error) {
        console.error('[EMAIL] Failed to send email:', error);
    }
}
