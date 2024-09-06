import * as dotenv from 'dotenv';
dotenv.config();

export const ZENDESK_DOMAIN = process.env.ZENDESK_DOMAIN;
export const ZENDESK_EMAIL = process.env.ZENDESK_EMAIL;
export const ZENDESK_API_TOKEN = process.env.ZENDESK_API_TOKEN;
export const ZENDESK_OAUTH2_SECRET = process.env.ZENDESK_OAUTH2_SECRET;

export const ZENDESK_AUTH = Buffer.from(
  `${ZENDESK_EMAIL}/token:${ZENDESK_API_TOKEN}`
).toString('base64');
