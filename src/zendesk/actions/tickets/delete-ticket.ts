import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete ticket
const options: IActionOptions = null;
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
  api_function: deleteTicket,
  options,
} as TQorePartialActionWithFunction<typeof options>;
