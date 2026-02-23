/**
 * Mapping des paramètres UTM vers les champs Odoo CRM.
 * Utilisé lors de la soumission du tunnel de devis.
 */
export function mapUtmsToOdoo(utms: Record<string, string>) {
    return {
        utm_source: utms.utm_source || '',       // Odoo: utm.source
        utm_medium: utms.utm_medium || '',       // Odoo: utm.medium
        utm_campaign: utms.utm_campaign || '',   // Odoo: utm.campaign
        // Champs custom Odoo
        x_utm_content: utms.utm_content || '',
        x_utm_term: utms.utm_term || '',
    };
}

/**
 * Hash SHA-256 pour Enhanced Conversions / Meta CAPI.
 * Normalise (lowercase, trim) avant le hash.
 */
export async function hashSHA256(value: string): Promise<string> {
    const normalized = value.toLowerCase().trim();
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
