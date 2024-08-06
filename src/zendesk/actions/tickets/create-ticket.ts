import { IResponseTicketInterface, IUpdateCreateTicketInterface } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

interface ICreateTicket {
    ticketCreate: IUpdateCreateTicketInterface,
}

// Defining a function to create a ticket
export const createTicket = async ({ ticketCreate }: ICreateTicket) => {
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


export default {
    app_function: createTicket,
    response_type: {
      created_at: "*string",
      id: "*number",
      name: "*string"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>