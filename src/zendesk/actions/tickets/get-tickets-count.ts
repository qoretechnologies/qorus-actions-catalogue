import { ITicketsCountInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import L from '../../../i18n/i18n-node';

// Defining a function to fetch tickets
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
  app_function: getTicketsCount,
  options: null,
  response_type: {
   count: {
    type: '*number',
    name: 'count',
    display_name: L.en.apps.zendesk.actions.tickets.count.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.count.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.count.longDesc(),
    example_value: 123,
    },
  },
} satisfies TQorePartialActionWithFunction;
