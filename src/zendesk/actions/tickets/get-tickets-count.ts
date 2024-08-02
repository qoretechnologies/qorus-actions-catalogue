import { ITicketsCountInterface } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";

// Defining a function to fetch tickets
export const getTicketsCount = async () => {
    try {
        const data: ITicketsCountInterface = await zendeskRequest(`/tickets/count.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};