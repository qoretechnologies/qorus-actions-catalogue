import { ITicketsCountInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse } from 'global/models/actions';

// Defining a function to fetch tickets
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  count: {
    type: 'number',
    name: 'count',
    display_name: L.en.apps.zendesk.actions.tickets.count.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.count.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.count.longDesc(),
    example_value: 123,
  },
};
const getTicketsCount = async () => {
  try {
    const data: ITicketsCountInterface = await zendeskRequest(`/tickets/count.json`, 'GET');

    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

export default {
  action: 'get_ticket_count',
  api_function: getTicketsCount,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
