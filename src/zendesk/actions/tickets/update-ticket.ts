import { IResponseTicketInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import L from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to update a ticket
const options: IActionOptions = ZendeskOptions.tickets.ticketCreateUpdate;
export const response_type: IActionResponse = {
  ticket: {
    name: 'ticket',
    display_name: L.en.apps.zendesk.actions.tickets.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.name.longDesc(),
    example_value: {
      custom_status_id: 123,
      id: 35436,
      requester_id: 123453,
      status: "open",
      subject: "My printer is on fire!"
    },
    type: {
      custom_status_id: {
        name: 'custom_status_id',
        display_name: L.en.apps.zendesk.actions.tickets.custom_status_id.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.custom_status_id.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.custom_status_id.longDesc(),
        type: 'number',
      },
      id: {
        name: 'id',
        display_name: L.en.apps.zendesk.actions.tickets.id.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.id.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.id.longDesc(),
        type: 'number',
      },
      status: {
        name: 'status',
        display_name: L.en.apps.zendesk.actions.tickets.status.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.status.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.status.longDesc(),
        type: 'string',
      },
      subject: {
        name: 'subject',
        display_name: L.en.apps.zendesk.actions.tickets.subject.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.subject.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.subject.longDesc(),
        type: 'string',
      },
    }
  },
  audit: {
    name: 'audit',
    display_name: L.en.apps.zendesk.actions.tickets.audit.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.audit.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.audit.longDesc(),
    type: {
      events: {
        name: 'events',
        display_name: L.en.apps.zendesk.actions.tickets.events.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.events.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.events.longDesc(),
        type: '*list',
        example_value: [{
          field_name: "subject",
          id: 206091192546,
          type: "Create",
          value: "My printer is on fire!"
        }],
      }
    },
  }
} as IActionResponse;

const updateTicket = async (ticketUpdate: TActionData<typeof options>) => {
  const { ticket_id, ...ticket } = ticketUpdate
  try {
    const data: IResponseTicketInterface = await zendeskRequest(
      `/tickets/${ticket_id}.json`,
      'PUT',
      {
        ticket,
      }
    );
    return data;
  } catch (error) {
    console.error('Error updating ticket:', error);
    throw error;
  }
};

export default {
  action: 'update_ticket',
  app_function: updateTicket,
  options,
  response_type
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;

