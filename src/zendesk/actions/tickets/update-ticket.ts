import { IResponseTicketInterface, IUpdateCreateTicketInterface } from "src/zendesk/models/tickets";
import { zendeskRequest } from "../..";

// Defining a function to update a ticket
export const updateTicket = async (ticketId: number, ticketUpdate: IUpdateCreateTicketInterface) => {
    try {
        const data: IResponseTicketInterface = await zendeskRequest(`/tickets/${ticketId}.json`, 'POST', {
            ticket: ticketUpdate
        });
        return data;
    } catch (error) {
        console.error('Error updating ticket:', error);
        throw error;
    }
};