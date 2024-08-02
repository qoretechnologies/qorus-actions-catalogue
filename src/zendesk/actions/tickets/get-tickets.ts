import { ITicketsInterface, ITicketType } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";

// Defining a function to fetch tickets
export const getTickets = async ({ type, onlyDeleted }) => {
    try {
        const data: ITicketsInterface = await zendeskRequest(`/tickets${onlyDeleted ? '/deleted_tickets' : type ? `/${type}` : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};