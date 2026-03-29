/**
 * Venus Estetika — Demo Dataset Seeder
 *
 * Creates a deterministic set of leads for demo/filming purposes.
 * Each lead demonstrates a different scoring scenario.
 *
 * Usage: node scripts/demo-seed.js [base_url]
 * Default: http://localhost:3099
 */

const BASE_URL = process.argv[2] || 'http://localhost:3099';

const DEMO_LEADS = [
  // HOT leads (score 70+)
  {
    intervention: 'bypass-gastrique',
    firstName: 'Marie', lastName: 'Dupont',
    email: 'marie.dupont@example.fr', phone: '+33 6 12 34 56 78',
    country: 'FR', gender: 'femme', age: 42,
    weight: 120, height: 165,
    desiredDate: 'asap', preferredContact: 'phone',
    consentRGPD: true, consentMarketing: true,
    message: 'Mon médecin recommande un bypass. IMC de 44. Urgence santé.',
    utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'bariatrique-france',
  },
  {
    intervention: 'augmentation-mammaire',
    firstName: 'Camille', lastName: 'Bernard',
    email: 'camille.b@example.ch', phone: '+41 78 123 45 67',
    country: 'CH', gender: 'femme', age: 29,
    currentSize: 'A', desiredSize: 'C',
    desiredDate: 'asap', preferredContact: 'whatsapp',
    consentRGPD: true, consentMarketing: true,
    message: 'Je souhaite une augmentation mammaire naturelle. Disponible en avril.',
    utm_source: 'instagram', utm_medium: 'social', utm_campaign: 'mammaire-suisse',
  },
  {
    intervention: 'rhinoplastie',
    firstName: 'Thomas', lastName: 'Petit',
    email: 'thomas.petit@example.fr', phone: '+33 7 98 76 54 32',
    country: 'FR', gender: 'homme', age: 27,
    desiredDate: 'asap', preferredContact: 'email',
    consentRGPD: true, consentMarketing: false,
    message: 'Bosse sur le nez depuis un accident. Gêne esthétique et respiratoire.',
    utm_source: 'google', utm_medium: 'organic',
  },

  // WARM leads (score 40-69)
  {
    intervention: 'liposuccion',
    firstName: 'Sophie', lastName: 'Martin',
    email: 'sophie.martin@example.be', phone: '+32 470 12 34 56',
    country: 'BE', gender: 'femme', age: 35,
    targetZones: ['ventre', 'cuisses'],
    desiredDate: '1-2-months', preferredContact: 'whatsapp',
    consentRGPD: true, consentMarketing: true,
    message: 'Intéressée par une lipo du ventre et des cuisses.',
  },
  {
    intervention: 'greffe-cheveux',
    firstName: 'Julien', lastName: 'Leroy',
    email: 'julien.leroy@example.fr', phone: '+33 6 55 44 33 22',
    country: 'FR', gender: 'homme', age: 38,
    hairLossType: 'front', norwoodStage: 4,
    desiredDate: '3-6-months', preferredContact: 'email',
    consentRGPD: true, consentMarketing: false,
    message: 'Calvitie progressive depuis 5 ans. Intéressé par la FUE.',
  },
  {
    intervention: 'abdominoplastie',
    firstName: 'Nathalie', lastName: 'Dubois',
    email: 'nathalie.d@example.fr', phone: '+33 6 11 22 33 44',
    country: 'FR', gender: 'femme', age: 41,
    pregnancies: true, weightFluctuation: true,
    desiredDate: '1-2-months', preferredContact: 'phone',
    consentRGPD: true, consentMarketing: true,
    message: 'Après 3 grossesses, excès de peau au niveau du ventre.',
    utm_source: 'facebook', utm_medium: 'cpc', utm_campaign: 'silhouette-fr',
  },

  // NURTURE leads (score 20-39)
  {
    intervention: 'facettes-dentaires',
    firstName: 'Amira', lastName: 'Ben Ali',
    email: 'amira.benali@example.tn', phone: '+216 55 123 456',
    country: 'TN', gender: 'femme', age: 30,
    desiredDate: 'just-looking', preferredContact: 'email',
    consentRGPD: true, consentMarketing: false,
    message: 'Je compare les prix entre la Tunisie et la Turquie.',
  },
  {
    intervention: 'botox',
    firstName: 'Elena', lastName: 'Rossi',
    email: 'elena.rossi@example.it', phone: '+39 333 123 4567',
    country: 'OTHER', gender: 'femme', age: 45,
    desiredDate: 'just-looking', preferredContact: 'email',
    consentRGPD: true, consentMarketing: false,
    message: 'Information sur les prix du botox en Tunisie.',
  },

  // Contact form leads
  {
    intervention: 'lifting-cervico-facial',
    firstName: 'Françoise', lastName: 'Lambert',
    email: 'francoise.l@example.fr', phone: '+33 6 77 88 99 00',
    country: 'FR', gender: 'femme', age: 55,
    desiredDate: '1-2-months', preferredContact: 'phone',
    consentRGPD: true, consentMarketing: true,
    message: 'Je souhaite un lifting complet du visage et du cou. Disponible en mai.',
    utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'visage-premium',
  },
  {
    intervention: 'sleeve-gastrique',
    firstName: 'Pierre', lastName: 'Moreau',
    email: 'pierre.moreau@example.fr', phone: '+33 6 44 55 66 77',
    country: 'FR', gender: 'homme', age: 48,
    weight: 135, height: 178,
    desiredDate: 'asap', preferredContact: 'phone',
    consentRGPD: true, consentMarketing: true,
    message: 'IMC > 40. Diabète type 2. Mon endocrinologue recommande une sleeve.',
    utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'bariatrique-urgence',
  },
];

async function seedLead(lead, index) {
  const label = `[${index + 1}/${DEMO_LEADS.length}]`;
  try {
    const res = await fetch(`${BASE_URL}/api/leads/v2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });

    const result = await res.json();

    if (result.success) {
      const score = result.score;
      console.log(
        `${label} ${score.category.padEnd(7)} ${String(score.value).padStart(3)}/100  ${lead.firstName.padEnd(10)} ${lead.intervention.padEnd(25)} Odoo:${result.odoo?.lead_id || 'mock'}`
      );
    } else {
      console.error(`${label} FAIL: ${JSON.stringify(result.errors || result.message)}`);
    }
  } catch (error) {
    console.error(`${label} ERROR: ${error.message}`);
  }
}

async function main() {
  console.log('='.repeat(80));
  console.log('Venus Estetika — Demo Dataset Seeder');
  console.log(`Target: ${BASE_URL}`);
  console.log(`Leads: ${DEMO_LEADS.length}`);
  console.log('='.repeat(80));
  console.log('');
  console.log('CAT     SCORE  NAME       INTERVENTION              ODOO');
  console.log('-'.repeat(80));

  for (let i = 0; i < DEMO_LEADS.length; i++) {
    await seedLead(DEMO_LEADS[i], i);
    // Small delay to avoid overwhelming
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('');
  console.log('='.repeat(80));

  // Fetch and display stats
  try {
    const statsRes = await fetch(`${BASE_URL}/api/leads/stats`);
    const stats = await statsRes.json();
    console.log(`Total leads: ${stats.stats.total}`);
    console.log(`By category:`, JSON.stringify(stats.stats.byCategory));
    console.log(`Avg score: ${stats.stats.avgScore || 'N/A'}`);
    console.log(`System mode: ${stats.system.mode}`);
  } catch (e) {
    console.log('Stats fetch failed:', e.message);
  }

  console.log('');
  console.log('Dashboard: http://localhost:3099/admin/leads');
  console.log('='.repeat(80));
}

main();
