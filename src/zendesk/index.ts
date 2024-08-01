import axios from 'axios';
import { ZENDESK_AUTH, ZENDESK_DOMAIN } from "./configs";

export const zendeskRequest = async (endpoint: string, method: string, body?: object) => {
    const uri = `https://${ZENDESK_DOMAIN}/api/v2${endpoint}`;
    // to be updated by Qorus!
    let response;
    switch (method) {
        case 'GET':
            response = await axios.get(uri, {
                headers: {
                    Authorization: `Basic ${ZENDESK_AUTH}`,
                },
            });
            break;
        default:
            response = await axios.post(uri, {
                headers: {
                  Authorization: `Basic ${ZENDESK_AUTH}`,
                  'Content-Type': 'application/json',
                },
                body
              });
            break;
    }
    if (!response) throw new Error(`Zendesk API error`);
    return response;
};