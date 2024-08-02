import axios, { AxiosResponse } from 'axios';
import { ZENDESK_AUTH, ZENDESK_DOMAIN } from "./configs";

export const zendeskRequest = async (endpoint: string, method: string, body?: object) => {
    const uri = `https://${ZENDESK_DOMAIN}/api/v2${endpoint}`;
    try {
        const response: AxiosResponse = await axios({
            method,
            url: uri,
            headers: {
                Authorization: `Basic ${ZENDESK_AUTH}`,
                'Content-Type': 'application/json',
            },
            ...body && { data: body }
        });
        return response.data;
    } catch (error) {
        console.error('Error with Zendesk request:', error);
        throw error;
    }
};
