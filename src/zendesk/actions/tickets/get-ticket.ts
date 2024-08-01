import { ITicketInterface } from "src/zendesk/models/tickets";
import { zendeskRequest } from "../..";

// Defining a function to fetch ticket by id
export const getTicket = async (ticketId: number) => {
    try {
        const data: ITicketInterface = await zendeskRequest(`/tickets/${ticketId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching ticket:', error);
        throw error;
    }
};