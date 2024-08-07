import { IQoreAppActionWithFunction } from 'global/models/qore';
import { IResponseTicketInterface, IUpdateCreateTicketInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';

interface IUpdateTicket {
  ticketId: number;
  ticketUpdate: IUpdateCreateTicketInterface;
}

// Defining a function to update a ticket
const updateTicket = async ({ ticketId, ticketUpdate }: IUpdateTicket) => {
  try {
    const data: IResponseTicketInterface = await zendeskRequest(
      `/tickets/${ticketId}.json`,
      'POST',
      {
        ticket: ticketUpdate,
      }
    );
    return data;
  } catch (error) {
    console.error('Error updating ticket:', error);
    throw error;
  }
};

export default {
  app_function: updateTicket,
  response_type: {
    created_at: '*string',
    id: '*number',
    name: '*string',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
