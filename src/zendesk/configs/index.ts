export const ZENDESK_DOMAIN = process.env.ZENDESK_DOMAIN;
export const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL;
export const ZENDESK_API_TOKEN = process.env.ZENDESK_API_TOKEN;

// export const ZENDESK_AUTH =
//   'btoa' in window
//     ? btoa(`${ZENDESK_EMAIL}/token:${ZENDESK_API_TOKEN}`)
//     : Buffer.from(`${ZENDESK_EMAIL}/token:${ZENDESK_API_TOKEN}`).toString('base64');

export const ZENDESK_AUTH = Buffer.from(`mkrtchyanastghik86@gmail.com/token:YYQxVbSJ4hc9rIgMjlt1Bil7NtnL1siLx4AaxFdR`).toString('base64');