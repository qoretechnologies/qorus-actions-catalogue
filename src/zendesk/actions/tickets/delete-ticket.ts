import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to delete ticket
const options: IActionOptions = null;
const response_type: IActionResponse = null;
const deleteTicket = async ({ ticket_id }: TActionData<typeof options>) => {
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
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;