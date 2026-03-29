/**
 * Venus Estetika — End-to-End Lead Processing Test
 *
 * Tests the full agentic pipeline:
 * Intake → Qualify → Score → CRM Sync → Activate → Audit → Explain
 *
 * Usage: node test-lead-v2.js [base_url]
 * Default: http://localhost:3000
 */

const BASE_URL = process.argv[2] || 'http://localhost:3000';

const TEST_CASES = [
  {
    name: 'HOT Lead — Bypass from France, ASAP',
    payload: {
      intervention: 'bypass-gastrique',
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie.dupont@example.com',
      phone: '+33 6 12 34 56 78',
      country: 'FR',
      gender: 'femme',
      age: 42,
      weight: 120,
      height: 165,
      desiredDate: 'asap',
      preferredContact: 'phone',
      consentRGPD: true,
      consentMarketing: true,
      message: 'Je souhaite perdre du poids rapidement. Mon médecin m\'a recommandé un bypass.',
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'bariatrique-france-2026',
    },
    expectedCategory: 'HOT',
    expectedMinScore: 65,
  },
  {
    name: 'WARM Lead — Rhinoplastie from Belgium, 1-2 months',
    payload: {
      intervention: 'rhinoplastie',
      firstName: 'Thomas',
      lastName: 'Lefèvre',
      email: 'thomas.lefevre@example.com',
      phone: '+32 470 12 34 56',
      country: 'BE',
      gender: 'homme',
      age: 28,
      desiredDate: '1-2-months',
      preferredContact: 'whatsapp',
      consentRGPD: true,
      consentMarketing: false,
    },
    expectedCategory: 'WARM',
    expectedMinScore: 40,
  },
  {
    name: 'NURTURE Lead — Facettes from Tunisia, just looking',
    payload: {
      intervention: 'facettes-dentaires',
      firstName: 'Amira',
      lastName: 'Ben Ali',
      email: 'amira.benali@example.com',
      phone: '+216 55 123 456',
      country: 'TN',
      desiredDate: 'just-looking',
      preferredContact: 'email',
      consentRGPD: true,
      consentMarketing: false,
    },
    expectedCategory: 'NURTURE',
    expectedMinScore: 20,
  },
];

async function runTest(testCase) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`TEST: ${testCase.name}`);
  console.log('='.repeat(60));

  try {
    // Step 1: Submit lead
    const res = await fetch(`${BASE_URL}/api/leads/v2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testCase.payload),
    });

    const result = await res.json();

    if (!result.success) {
      console.error('FAIL: Lead submission failed', result);
      return false;
    }

    console.log(`\nLead ID: ${result.lead_id}`);
    console.log(`Score: ${result.score.value}/100 → ${result.score.category}`);
    console.log(`Odoo Synced: ${result.odoo.synced} (ID: ${result.odoo.lead_id})`);

    // Score factors
    console.log('\nScore Breakdown:');
    for (const factor of result.score.factors) {
      console.log(`  ${factor.name}: ${factor.points}/${factor.max_points} — ${factor.reasoning}`);
    }

    // Recommended actions
    console.log(`\nRecommended Actions (${result.recommended_actions.length}):`);
    for (const action of result.recommended_actions) {
      const approval = action.requires_approval ? ' [NEEDS APPROVAL]' : '';
      console.log(`  [${action.priority}] ${action.description}${approval}`);
    }

    // Audit trail
    console.log(`\nAudit Trail (${result.audit_trail.length} events):`);
    for (const event of result.audit_trail) {
      const policy = event.policy_check?.passed ? 'PASS' : 'FAIL';
      console.log(`  ${event.timestamp} | ${event.actor} | ${event.action} | Policy: ${policy}`);
    }

    // Step 2: Verify explain endpoint
    console.log(`\nExplain URL: ${result.explain_url}`);
    const explainRes = await fetch(`${BASE_URL}${result.explain_url}`);
    const explain = await explainRes.json();

    if (explain.lead_id) {
      console.log('Explain endpoint: OK');
      console.log(`  Governance: ${explain.governance.ai_transparency}`);
    }

    // Step 3: Assertions
    let passed = true;

    if (result.score.category !== testCase.expectedCategory) {
      console.error(`\nASSERTION FAIL: Expected category ${testCase.expectedCategory}, got ${result.score.category}`);
      passed = false;
    }

    if (result.score.value < testCase.expectedMinScore) {
      console.error(`\nASSERTION FAIL: Expected min score ${testCase.expectedMinScore}, got ${result.score.value}`);
      passed = false;
    }

    if (!result.odoo.synced) {
      console.warn('\nWARNING: Odoo sync is in mock mode (expected if no API key configured)');
    }

    console.log(`\nRESULT: ${passed ? 'PASS ✓' : 'FAIL ✗'}`);
    return passed;

  } catch (error) {
    console.error('ERROR:', error.message);
    return false;
  }
}

async function main() {
  console.log('Venus Estetika — Agentic Lead Processing E2E Test');
  console.log(`Target: ${BASE_URL}`);
  console.log(`Time: ${new Date().toISOString()}`);

  let passed = 0;
  let failed = 0;

  for (const testCase of TEST_CASES) {
    const result = await runTest(testCase);
    if (result) passed++;
    else failed++;
  }

  // Check stats endpoint
  console.log(`\n${'='.repeat(60)}`);
  console.log('STATS ENDPOINT');
  console.log('='.repeat(60));

  try {
    const statsRes = await fetch(`${BASE_URL}/api/leads/stats`);
    const stats = await statsRes.json();
    console.log(`Total leads: ${stats.stats.total}`);
    console.log(`By category:`, stats.stats.byCategory);
    console.log(`System mode: ${stats.system.mode}`);
    console.log('Stats endpoint: OK');
  } catch (error) {
    console.error('Stats endpoint failed:', error.message);
    failed++;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`SUMMARY: ${passed} passed, ${failed} failed out of ${TEST_CASES.length} tests`);
  console.log('='.repeat(60));

  process.exit(failed > 0 ? 1 : 0);
}

main();
