import { ITicketsInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch tickets
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  tickets: {
    type: 'hash',
    name: 'tickets',
    display_name: L.en.apps.zendesk.actions.tickets.tickets.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.tickets.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.tickets.longDesc(),
    example_value: [],
  },
  next_page: {
    type: 'number',
    name: 'next_page',
    display_name: L.en.apps.zendesk.actions.tickets.next_page.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.next_page.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.next_page.longDesc(),
    example_value: 2,
  },
  previous_page: {
    type: 'number',
    name: 'previous_page',
    display_name: L.en.apps.zendesk.actions.tickets.previous_page.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.previous_page.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.previous_page.longDesc(),
    example_value: 1,
  },
  count: {
    type: 'number',
    name: 'count',
    display_name: L.en.apps.zendesk.actions.tickets.count.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.count.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.count.longDesc(),
    example_value: 10,
  },
};
const getTickets = async ({ ids }: TActionData<typeof options>) => {
  try {
    const data: ITicketsInterface = await zendeskRequest(`/tickets/show_many.json`, 'GET', null, {
      ids,
    });

    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

export default {
  action: 'get_tickets',
  api_function: getTickets,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
