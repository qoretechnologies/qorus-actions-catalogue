import { ITicketsInterface, ITicketType } from "src/zendesk/models/tickets";
import { zendeskRequest } from "../..";

// Defining a function to fetch tickets
export const getTickets = async (type?: ITicketType) => {
    try {
        const data: ITicketsInterface = await zendeskRequest(`/tickets${type ? `/${type}` : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};