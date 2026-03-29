/**
 * Venus Estetika — Follow-up Email Templates
 *
 * Policy-driven email templates for lead nurturing.
 * Each template is traceable and governed by consent rules.
 */

import type { LeadIntake, LeadScore } from '@/lib/domain/types';

export interface EmailTemplate {
  subject: string;
  htmlBody: string;
  textBody: string;
  templateId: string;
  requiresConsent: boolean;
}

// ============================================================
// TEMPLATE REGISTRY
// ============================================================

export function getConfirmationEmail(intake: LeadIntake, leadId: string): EmailTemplate {
  return {
    templateId: 'confirmation_receipt',
    requiresConsent: false, // Transactional, no marketing consent needed
    subject: `Votre demande de devis pour ${formatIntervention(intake.intervention)} a bien été reçue`,
    htmlBody: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #20295b;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #c5a55a;">
          <h1 style="color: #20295b; font-size: 24px; margin: 0;">Venus Estetika</h1>
          <p style="color: #c5a55a; font-size: 14px; margin: 5px 0 0;">La perfection à portée de vol</p>
        </div>

        <div style="padding: 30px 0;">
          <h2 style="color: #20295b;">Bonjour ${intake.firstName},</h2>
          <p>Merci pour votre demande de devis pour <strong>${formatIntervention(intake.intervention)}</strong>.</p>

          <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Référence :</strong> ${leadId}</p>
            <p style="margin: 0 0 10px;"><strong>Intervention :</strong> ${formatIntervention(intake.intervention)}</p>
            <p style="margin: 0;"><strong>Contact préféré :</strong> ${formatContactMethod(intake.preferredContact)}</p>
          </div>

          <p>Un coordinateur médical francophone va analyser votre demande et vous contactera sous <strong>24h ouvrées</strong>.</p>

          <p>En attendant, vous pouvez :</p>
          <ul>
            <li><a href="https://venus-estetika.com/temoignages" style="color: #399BB5;">Découvrir les témoignages de nos patients</a></li>
            <li><a href="https://venus-estetika.com/chirurgiens" style="color: #399BB5;">Faire connaissance avec nos chirurgiens</a></li>
            <li><a href="https://venus-estetika.com/sejour-medical" style="color: #399BB5;">Voir le déroulement du séjour médical</a></li>
          </ul>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #888;">
          <p>Venus Estetika — Clinique partenaire à Tunis</p>
          <p>WhatsApp: +216 50 606 780 | Email: contact@venus-estetika.com</p>
          <p><a href="https://venus-estetika.com" style="color: #399BB5;">www.venus-estetika.com</a></p>
        </div>
      </div>
    `,
    textBody: `Bonjour ${intake.firstName},\n\nMerci pour votre demande de devis pour ${formatIntervention(intake.intervention)}.\n\nRéférence: ${leadId}\nUn coordinateur vous contactera sous 24h ouvrées.\n\nVenus Estetika\nWhatsApp: +216 50 606 780`,
  };
}

export function getNurtureEmail1(intake: LeadIntake, leadId: string): EmailTemplate {
  return {
    templateId: 'nurture_j3',
    requiresConsent: true,
    subject: `${intake.firstName}, avez-vous des questions sur ${formatIntervention(intake.intervention)} ?`,
    htmlBody: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #20295b;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #c5a55a;">
          <h1 style="color: #20295b; font-size: 24px; margin: 0;">Venus Estetika</h1>
        </div>

        <div style="padding: 30px 0;">
          <h2>Bonjour ${intake.firstName},</h2>
          <p>Nous espérons que vous avez bien reçu notre premier email suite à votre demande de devis (réf. ${leadId}).</p>

          <p>Nous comprenons que choisir une intervention comme <strong>${formatIntervention(intake.intervention)}</strong> est une décision importante. C'est pourquoi nous souhaitons vous accompagner à chaque étape.</p>

          <h3 style="color: #c5a55a;">Vos questions fréquentes :</h3>
          <ul>
            <li><strong>Combien coûte l'intervention ?</strong> Nos tarifs sont 40 à 60% inférieurs à ceux pratiqués en France, avec la même qualité.</li>
            <li><strong>Comment se passe le séjour ?</strong> Nous organisons tout : vol, transferts, clinique, hôtel de convalescence.</li>
            <li><strong>Quels sont les chirurgiens ?</strong> Nos 9 chirurgiens partenaires sont tous certifiés et expérimentés.</li>
          </ul>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/21650606780?text=Bonjour, j'ai une question concernant ma demande ${leadId}"
               style="background: #25D366; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Poser une question par WhatsApp
            </a>
          </div>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #888;">
          <p>Venus Estetika | <a href="https://venus-estetika.com" style="color: #399BB5;">www.venus-estetika.com</a></p>
          <p style="font-size: 10px;">Vous recevez cet email car vous avez consenti à nos communications marketing. <a href="#">Se désabonner</a></p>
        </div>
      </div>
    `,
    textBody: `Bonjour ${intake.firstName},\n\nAvez-vous des questions sur ${formatIntervention(intake.intervention)} ?\n\nNos tarifs sont 40-60% inférieurs à la France. Nous organisons tout le séjour.\n\nWhatsApp: +216 50 606 780\nRéf: ${leadId}`,
  };
}

export function getNurtureEmail2(intake: LeadIntake, leadId: string): EmailTemplate {
  return {
    templateId: 'nurture_j7',
    requiresConsent: true,
    subject: `Nos patients témoignent — ${formatIntervention(intake.intervention)} en Tunisie`,
    htmlBody: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #20295b;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #c5a55a;">
          <h1 style="color: #20295b; font-size: 24px; margin: 0;">Venus Estetika</h1>
        </div>

        <div style="padding: 30px 0;">
          <h2>Bonjour ${intake.firstName},</h2>
          <p>Nos patients partagent leur expérience. Voici ce qu'ils disent de leur séjour médical en Tunisie :</p>

          <div style="background: #f8f9fa; border-left: 4px solid #c5a55a; padding: 15px 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <p style="font-style: italic; margin: 0 0 10px;">"Le personnel était incroyablement professionnel. Je me suis sentie en sécurité du début à la fin. Le résultat dépasse mes attentes."</p>
            <p style="margin: 0; font-weight: bold; color: #c5a55a;">— Patiente française, 2025</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://venus-estetika.com/temoignages"
               style="background: #20295b; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Lire tous les témoignages
            </a>
          </div>

          <p>Votre dossier (réf. ${leadId}) est toujours ouvert. N'hésitez pas à nous contacter pour finaliser votre devis.</p>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #888;">
          <p>Venus Estetika | <a href="https://venus-estetika.com" style="color: #399BB5;">www.venus-estetika.com</a></p>
          <p style="font-size: 10px;"><a href="#">Se désabonner</a></p>
        </div>
      </div>
    `,
    textBody: `Bonjour ${intake.firstName},\n\nNos patients témoignent de leur expérience en Tunisie.\n\nVotre dossier ${leadId} est toujours ouvert. Contactez-nous.\n\nVenus Estetika`,
  };
}

export function getNurtureEmail3(intake: LeadIntake, leadId: string): EmailTemplate {
  return {
    templateId: 'nurture_j14_lastchance',
    requiresConsent: true,
    subject: `${intake.firstName}, votre devis pour ${formatIntervention(intake.intervention)} expire bientôt`,
    htmlBody: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #20295b;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #c5a55a;">
          <h1 style="color: #20295b; font-size: 24px; margin: 0;">Venus Estetika</h1>
        </div>

        <div style="padding: 30px 0;">
          <h2>Bonjour ${intake.firstName},</h2>
          <p>Il y a quelques jours, vous nous avez contactés pour une <strong>${formatIntervention(intake.intervention)}</strong> (réf. ${leadId}).</p>

          <p>Nous souhaitons vous informer que les tarifs actuels sont garantis pour une durée limitée. Si vous êtes toujours intéressé(e), c'est le moment idéal pour finaliser votre devis.</p>

          <div style="background: linear-gradient(135deg, #20295b, #399BB5); color: white; border-radius: 12px; padding: 25px; margin: 20px 0; text-align: center;">
            <p style="font-size: 18px; font-weight: bold; margin: 0 0 15px;">Tarifs préférentiels garantis</p>
            <a href="https://wa.me/21650606780?text=Bonjour, je souhaite finaliser mon devis ${leadId}"
               style="background: #c5a55a; color: #20295b; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              Finaliser mon devis
            </a>
          </div>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #888;">
          <p>Venus Estetika | <a href="https://venus-estetika.com" style="color: #399BB5;">www.venus-estetika.com</a></p>
          <p style="font-size: 10px;"><a href="#">Se désabonner</a></p>
        </div>
      </div>
    `,
    textBody: `Bonjour ${intake.firstName},\n\nVotre devis pour ${formatIntervention(intake.intervention)} (réf. ${leadId}) est toujours ouvert.\n\nLes tarifs actuels sont garantis pour une durée limitée.\n\nWhatsApp: +216 50 606 780`,
  };
}

/**
 * Get the full nurture sequence for a lead based on category.
 */
export function getNurtureSequence(
  intake: LeadIntake,
  leadId: string,
  score: LeadScore
): { template: EmailTemplate; delayDays: number }[] {
  const sequence: { template: EmailTemplate; delayDays: number }[] = [];

  // Confirmation is always sent immediately (transactional)
  sequence.push({ template: getConfirmationEmail(intake, leadId), delayDays: 0 });

  // Marketing emails only if consent was given
  if (intake.consentMarketing) {
    if (score.category === 'HOT') {
      // HOT: faster sequence
      sequence.push({ template: getNurtureEmail1(intake, leadId), delayDays: 2 });
      sequence.push({ template: getNurtureEmail3(intake, leadId), delayDays: 5 });
    } else if (score.category === 'WARM') {
      sequence.push({ template: getNurtureEmail1(intake, leadId), delayDays: 3 });
      sequence.push({ template: getNurtureEmail2(intake, leadId), delayDays: 7 });
      sequence.push({ template: getNurtureEmail3(intake, leadId), delayDays: 14 });
    } else {
      // NURTURE / COLD: slower sequence
      sequence.push({ template: getNurtureEmail1(intake, leadId), delayDays: 5 });
      sequence.push({ template: getNurtureEmail2(intake, leadId), delayDays: 14 });
      sequence.push({ template: getNurtureEmail3(intake, leadId), delayDays: 30 });
    }
  }

  return sequence;
}

// ============================================================
// HELPERS
// ============================================================

function formatIntervention(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

function formatContactMethod(method: string): string {
  const map: Record<string, string> = {
    phone: 'Téléphone',
    whatsapp: 'WhatsApp',
    email: 'Email',
  };
  return map[method] || method;
}
