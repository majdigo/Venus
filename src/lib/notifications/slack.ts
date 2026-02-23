export interface SlackNotification {
    leadId: number;
    name: string;
    intervention: string;
    score?: number;
    source?: string;
    device?: string;
}

export async function notifyTeam(data: SlackNotification) {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
        console.warn('[SLACK] Webhook URL not configured. Mock sending notification for Lead:', data.leadId);
        return;
    }

    const payload = {
        text: `🔔 *NOUVEAU LEAD - ${data.intervention}*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Patient*: ${data.name}\n*Intervention*: ${data.intervention}\n*Score Visiteur*: ${data.score || 0}/60\n*Source*: ${data.source || 'Direct'}\n*Appareil*: ${data.device || 'Inconnu'}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n<https://venus-crm.odoo.com/web#id=${data.leadId}&model=crm.lead&view_type=form|Voir dans Odoo →>`
    };

    try {
        const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            console.error('[SLACK] Error response:', res.statusText);
        }
    } catch (error) {
        console.error('[SLACK] Failed to send notification:', error);
    }
}
