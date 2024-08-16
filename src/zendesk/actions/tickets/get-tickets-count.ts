import { ITicketsCountInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';

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
   refreshed_at: {
     display_name: 'Refreshed At',
     short_desc: 'The last time the ticket count was refreshed',
     desc: 'The last time the ticket count was refreshed',
     name:'refreshed_at',
     type: '*string'
   },
   value: {
     display_name: 'Ticket Count',
     short_desc: 'The total number of tickets',
     desc: 'The total number of tickets',
     name:'value',
     type: '*number'
   }
  },
} satisfies TQorePartialActionWithFunction;
