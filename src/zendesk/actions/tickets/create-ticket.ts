import { IResponseTicketInterface } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";

// Defining a function to create a ticket
export const createTicket = async ({ ticketCreate }) => {
    try {
        const data: IResponseTicketInterface = await zendeskRequest('/tickets', 'POST', {
            ticket: ticketCreate
        });
        return data;
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
};