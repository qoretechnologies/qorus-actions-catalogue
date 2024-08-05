import { ITicketsInterface, ITicketType } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";

interface IGetTickets {
    variant?: ITicketType,
    onlyDeleted?: boolean
}

// Defining a function to fetch tickets
export const getTickets = async ({ variant, onlyDeleted }: IGetTickets) => {
    try {
        const data: ITicketsInterface = await zendeskRequest(`/tickets${onlyDeleted ? '/deleted_tickets' : variant ? `/${variant}` : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};