import { ITicketsInterface} from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';



// Defining a function to fetch tickets
const options: IActionOptions = null;
export const response_type: IActionResponse =  {
  tickets: {
    display_name: 'tickets',
    short_desc: 'All tickets',
    desc: 'Got the all available tickets',
    name: 'tickets',
    example_value: [],
    type: '*list',
  },
  next_page: {
    type: '*number',
    name: 'next_page',
    display_name: 'Next Page',
    short_desc: 'Next page number',
    desc: 'Next page number',
    example_value: 2,
  },
  previous_page: {
    type: '*number',
    name: 'previous_page',
    display_name: 'Previous Page',
    short_desc: 'Previous page number',
    desc: 'Previous page number',
    example_value: 1,
  },
  count: {
    type: '*number',
    name: 'count',
    display_name: 'Count',
    short_desc: 'The tickets count',
    desc: 'The tickets count',
    example_value: 10,
  },
};
const getTickets = async ({ ids }:TActionData<typeof options>) => {
  try {
    const data: ITicketsInterface = await zendeskRequest(
      `/tickets/show_many.json`,
      'GET',
      null,
      {
        ids,
      },
    );
    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

export default {
  action: 'get_tickets',
  app_function: getTickets,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;

