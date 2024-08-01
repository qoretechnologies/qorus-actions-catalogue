import { IResponseTicketInterface, IUpdateCreateTicketInterface } from "src/zendesk/models/tickets";
import { zendeskRequest } from "../..";

// Defining a function to create a ticket
export const createTicket = async (ticketCreate: IUpdateCreateTicketInterface) => {
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