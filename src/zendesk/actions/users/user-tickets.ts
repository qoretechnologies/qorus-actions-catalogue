import { ITicketType } from "src/zendesk/models/tickets";
import { zendeskRequest } from "../..";

// Defining a function to fetch user tickets by id
export const getUserTickets = async (userId: number, type?: ITicketType) => {
    try {
        const data = await zendeskRequest(`/users/${userId}/tickets${type ? `/${type}` : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user tickets:', error);
        throw error;
    }
};