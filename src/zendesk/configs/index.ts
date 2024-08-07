export const ZENDESK_DOMAIN = process.env.ZENDESK_DOMAIN || 'qorehelp.zendesk.com';
export const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL || 'mkrtchyanastghik86@gmail.com';
export const ZENDESK_API_TOKEN =
  process.env.ZENDESK_API_TOKEN || 'YYQxVbSJ4hc9rIgMjlt1Bil7NtnL1siLx4AaxFdR';

export const ZENDESK_AUTH =
  'btoa' in window
    ? btoa(`${ZENDESK_EMAIL}/token:${ZENDESK_API_TOKEN}`)
    : Buffer.from(`${ZENDESK_EMAIL}/token:${ZENDESK_API_TOKEN}`).toString('base64');
