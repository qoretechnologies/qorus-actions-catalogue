import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { TTicketsOptions } from 'zendesk/models/tickets';
import { IActionOptions, IActionResponse } from 'global/models/actions';

// Defining a function to delete ticket
const deleteTicket = async ({ ticket_id }: TTicketsOptions) => {
  try {
    const data = await zendeskRequest(`/tickets/${ticket_id}.json`, 'DELETE');
    return data || {};
  } catch (error) {
    console.error('Error delete ticket:', error);
    throw error;
  }
};

export default {
  action: 'delete_ticket',
  app_function: deleteTicket,
  options: null,
  response_type: null,
} as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;
