import { zendeskRequest } from "..";
import { ICreateTicketInterface } from "../models";

// Defining a function to create a ticket
export const createTicket = async (subject: string, priority: string, comment: string) => {
    try {
        const data: ICreateTicketInterface = await zendeskRequest('/tickets', 'POST', {
            ticket: {
                subject,
                comment: {
                    body: comment
                },
                priority
            }
        });
        return data;
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
};