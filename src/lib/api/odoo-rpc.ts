import xmlrpc from 'xmlrpc';

const ODOO_URL = process.env.ODOO_URL || 'https://venus-crm.odoo.com';
const ODOO_DB = process.env.ODOO_DB || 'venus_production';
const ODOO_USER = process.env.ODOO_USER || 'api@venus-estetika.com';
const ODOO_PASSWORD = process.env.ODOO_API_KEY || ''; // API Key

export interface CrmLead {
    contact_name: string;
    email_from: string;
    phone: string;
    name: string;
    description: string;
    x_intervention?: string;
    x_preferred_contact?: string;
    x_visitor_score?: number;
    x_device?: string;
    x_landing_page?: string;
    x_rgpd_consent?: boolean;
    x_marketing_consent?: boolean;
    country_id?: number | boolean;
    source_id?: number | boolean;
    medium_id?: number | boolean;
    campaign_id?: number | boolean;
    tag_ids?: any[];
    [key: string]: any;
}

class OdooClient {
    private uid: number | null = null;
    private isConfigured: boolean = false;

    constructor() {
        this.isConfigured = !!(process.env.ODOO_API_KEY && process.env.ODOO_URL);
    }

    // Authentication
    async authenticate(): Promise<number> {
        if (!this.isConfigured) {
            console.warn('[ODOO] No API Key found, running in mock mode');
            return 1;
        }
        if (this.uid) return this.uid;

        const hostname = new URL(ODOO_URL).hostname;
        const client = xmlrpc.createSecureClient({
            host: hostname,
            port: 443,
            path: '/xmlrpc/2/common',
        });

        return new Promise((resolve, reject) => {
            client.methodCall('authenticate', [ODOO_DB, ODOO_USER, ODOO_PASSWORD, {}], (err, uid) => {
                if (err) reject(err);
                if (!uid) reject(new Error('Odoo Authentication failed'));
                this.uid = uid;
                resolve(uid);
            });
        });
    }

    // Generic CRUD Execute
    async execute(model: string, method: string, args: any[], kwargs: any = {}): Promise<any> {
        if (!this.isConfigured) {
            console.log(`[ODOO MOCK] Executing ${method} on ${model}`);
            return 99999; // Mock ID
        }

        const uid = await this.authenticate();
        const hostname = new URL(ODOO_URL).hostname;
        const client = xmlrpc.createSecureClient({
            host: hostname,
            port: 443,
            path: '/xmlrpc/2/object',
        });

        return new Promise((resolve, reject) => {
            client.methodCall('execute_kw',
                [ODOO_DB, uid, ODOO_PASSWORD, model, method, args, kwargs],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    }

    // Create Lead
    async createLead(data: Partial<CrmLead>): Promise<number> {
        return this.execute('crm.lead', 'create', [data]);
    }

    // Update Lead
    async updateLead(id: number, data: Partial<CrmLead>): Promise<boolean> {
        return this.execute('crm.lead', 'write', [[id], data]);
    }

    // Search Leads
    async searchLeads(domain: any[], fields: string[] = []): Promise<any[]> {
        return this.execute('crm.lead', 'search_read', [domain], { fields });
    }
}

export const odoo = new OdooClient();
