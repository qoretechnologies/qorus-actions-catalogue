import { zendeskRequest } from "../..";

// Defining a function to delete ticket
export const deleteTicket = async (ticketId: number) => {
    try {
        const data = await zendeskRequest(`/tickets/${ticketId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete ticket:', error);
        throw error;
    }
};