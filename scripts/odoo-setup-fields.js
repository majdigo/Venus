/**
 * Venus Estetika — Odoo Custom Fields Setup
 *
 * Creates the custom fields on crm.lead needed by the agentic pipeline.
 * Run once per Odoo database.
 *
 * Usage: node scripts/odoo-setup-fields.js
 *
 * Requires env vars: ODOO_URL, ODOO_DB, ODOO_USER, ODOO_API_KEY
 */

const xmlrpc = require('xmlrpc');

const ODOO_URL = process.env.ODOO_URL || 'https://estetika-test-saas19-0329.odoo.com';
const ODOO_DB = process.env.ODOO_DB || 'estetika-test-saas19-0329';
const ODOO_USER = process.env.ODOO_USER || 'majdi.ghorbel@gmail.com';
const ODOO_API_KEY = process.env.ODOO_API_KEY || '';

if (!ODOO_API_KEY) {
  console.error('ERROR: ODOO_API_KEY env var required');
  process.exit(1);
}

const hostname = new URL(ODOO_URL).hostname;

function createClient(path) {
  return xmlrpc.createSecureClient({ host: hostname, port: 443, path });
}

function methodCall(client, method, params) {
  return new Promise((resolve, reject) => {
    client.methodCall(method, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function authenticate() {
  const common = createClient('/xmlrpc/2/common');
  const uid = await methodCall(common, 'authenticate', [ODOO_DB, ODOO_USER, ODOO_API_KEY, {}]);
  if (!uid) throw new Error('Authentication failed');
  console.log(`Authenticated as UID: ${uid}`);
  return uid;
}

async function execute(uid, model, method, args, kwargs = {}) {
  const object = createClient('/xmlrpc/2/object');
  return methodCall(object, 'execute_kw', [ODOO_DB, uid, ODOO_API_KEY, model, method, args, kwargs]);
}

// Custom fields to create on crm.lead
const CUSTOM_FIELDS = [
  {
    name: 'x_intervention',
    field_description: 'Intervention',
    ttype: 'char',
    help: 'Type d\'intervention demandée (slug)',
  },
  {
    name: 'x_preferred_contact',
    field_description: 'Contact préféré',
    ttype: 'selection',
    selection_ids: [
      [0, 0, { value: 'phone', name: 'Téléphone' }],
      [0, 0, { value: 'whatsapp', name: 'WhatsApp' }],
      [0, 0, { value: 'email', name: 'Email' }],
    ],
    help: 'Mode de contact préféré du prospect',
  },
  {
    name: 'x_visitor_score',
    field_description: 'Score Lead (0-100)',
    ttype: 'integer',
    help: 'Score de qualification automatique (0-100)',
  },
  {
    name: 'x_lead_category',
    field_description: 'Catégorie Lead',
    ttype: 'selection',
    selection_ids: [
      [0, 0, { value: 'HOT', name: 'HOT (≥70)' }],
      [0, 0, { value: 'WARM', name: 'WARM (40-69)' }],
      [0, 0, { value: 'NURTURE', name: 'NURTURE (20-39)' }],
      [0, 0, { value: 'COLD', name: 'COLD (<20)' }],
    ],
    help: 'Catégorie de qualification agentique',
  },
  {
    name: 'x_device',
    field_description: 'Appareil',
    ttype: 'char',
    help: 'Type d\'appareil du visiteur (mobile/desktop)',
  },
  {
    name: 'x_landing_page',
    field_description: 'Landing Page',
    ttype: 'char',
    help: 'URL de la page d\'atterrissage',
  },
  {
    name: 'x_rgpd_consent',
    field_description: 'Consentement RGPD',
    ttype: 'boolean',
    help: 'Le prospect a accepté la politique de confidentialité',
  },
  {
    name: 'x_marketing_consent',
    field_description: 'Consentement Marketing',
    ttype: 'boolean',
    help: 'Le prospect accepte de recevoir des communications marketing',
  },
  {
    name: 'x_utm_content',
    field_description: 'UTM Content',
    ttype: 'char',
    help: 'Paramètre UTM content de la campagne',
  },
  {
    name: 'x_utm_term',
    field_description: 'UTM Term',
    ttype: 'char',
    help: 'Paramètre UTM term (mot-clé) de la campagne',
  },
];

async function main() {
  console.log('Venus Estetika — Odoo Custom Fields Setup');
  console.log(`Target: ${ODOO_URL} (DB: ${ODOO_DB})`);
  console.log('');

  const uid = await authenticate();

  // Get crm.lead model ID
  const modelIds = await execute(uid, 'ir.model', 'search', [[['model', '=', 'crm.lead']]]);
  if (!modelIds.length) {
    console.error('ERROR: crm.lead model not found');
    process.exit(1);
  }
  const crmLeadModelId = modelIds[0];
  console.log(`crm.lead model ID: ${crmLeadModelId}`);

  for (const field of CUSTOM_FIELDS) {
    // Check if field already exists
    const existing = await execute(uid, 'ir.model.fields', 'search', [
      [['model', '=', 'crm.lead'], ['name', '=', field.name]]
    ]);

    if (existing.length > 0) {
      console.log(`  [SKIP] ${field.name} — already exists`);
      continue;
    }

    try {
      const fieldData = {
        model_id: crmLeadModelId,
        name: field.name,
        field_description: field.field_description,
        ttype: field.ttype,
        help: field.help,
      };

      // Add selection values for selection fields
      if (field.ttype === 'selection' && field.selection_ids) {
        fieldData.selection_ids = field.selection_ids;
      }

      await execute(uid, 'ir.model.fields', 'create', [fieldData]);
      console.log(`  [OK] ${field.name} — created (${field.ttype})`);
    } catch (error) {
      console.error(`  [FAIL] ${field.name} — ${error.message || error}`);
    }
  }

  console.log('\nDone. Custom fields are now available on crm.lead.');
  console.log('You can verify in Odoo: Settings → Technical → Database Structure → Fields');

  // Test: create a lead with all custom fields
  console.log('\nTesting lead creation with custom fields...');
  try {
    const leadId = await execute(uid, 'crm.lead', 'create', [{
      name: '[TEST] Pipeline agentique — vérification champs custom',
      contact_name: 'Test Pipeline',
      email_from: 'test-fields@venus-estetika.com',
      phone: '+33 6 00 00 00 00',
      description: 'Test automatique de création de lead avec champs personnalisés.',
      x_intervention: 'rhinoplastie',
      x_preferred_contact: 'whatsapp',
      x_visitor_score: 85,
      x_lead_category: 'HOT',
      x_rgpd_consent: true,
      x_marketing_consent: false,
      x_landing_page: '/interventions/chirurgie-visage/rhinoplastie',
    }]);
    console.log(`  [OK] Test lead created with ID: ${leadId}`);
    console.log(`  Verify at: ${ODOO_URL}/odoo/crm`);
  } catch (error) {
    console.error(`  [FAIL] Test lead creation failed: ${error.message || error}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
