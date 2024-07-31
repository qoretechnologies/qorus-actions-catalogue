import { ITicketsInterface } from "../models";
import { zendeskRequest } from "..";

// Defining a function to fetch tickets
export const getTickets = async () => {
    try {
        const data: ITicketsInterface = await zendeskRequest('/tickets.json', 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};