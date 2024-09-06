import { IActionResponse, TActionData } from 'global/models/actions';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IResponseTicketInterface } from 'zendesk/models/tickets';
import { L } from '../../../i18n/i18n-node';
import { zendeskRequest } from '../../client';
import { options } from './create-ticket';

export const response_type = {
  ticket: {
    name: 'ticket',
    display_name: L.en.apps.Zendesk.actions.tickets.name.displayName(),
    short_desc: L.en.apps.Zendesk.actions.tickets.name.shortDesc(),
    desc: L.en.apps.Zendesk.actions.tickets.name.longDesc(),
    example_value: {
      custom_status_id: 123,
      id: 35436,
      status: 'open',
      subject: 'My printer is on fire!',
    },
    type: {
      custom_status_id: {
        name: 'custom_status_id',
        display_name: L.en.apps.Zendesk.actions.tickets.custom_status_id.displayName(),
        short_desc: L.en.apps.Zendesk.actions.tickets.custom_status_id.shortDesc(),
        desc: L.en.apps.Zendesk.actions.tickets.custom_status_id.longDesc(),
        type: 'number',
      },
      id: {
        name: 'id',
        display_name: L.en.apps.Zendesk.actions.tickets.id.displayName(),
        short_desc: L.en.apps.Zendesk.actions.tickets.id.shortDesc(),
        desc: L.en.apps.Zendesk.actions.tickets.id.longDesc(),
        type: 'number',
      },
      status: {
        name: 'status',
        display_name: L.en.apps.Zendesk.actions.tickets.status.displayName(),
        short_desc: L.en.apps.Zendesk.actions.tickets.status.shortDesc(),
        desc: L.en.apps.Zendesk.actions.tickets.status.longDesc(),
        type: 'string',
      },
      subject: {
        name: 'subject',
        display_name: L.en.apps.Zendesk.actions.tickets.subject.displayName(),
        short_desc: L.en.apps.Zendesk.actions.tickets.subject.shortDesc(),
        desc: L.en.apps.Zendesk.actions.tickets.subject.longDesc(),
        type: 'string',
      },
    },
  },
  audit: {
    name: 'audit',
    display_name: L.en.apps.Zendesk.actions.tickets.audit.displayName(),
    short_desc: L.en.apps.Zendesk.actions.tickets.audit.shortDesc(),
    desc: L.en.apps.Zendesk.actions.tickets.audit.longDesc(),
    type: {
      events: {
        name: 'events',
        display_name: L.en.apps.Zendesk.actions.tickets.events.displayName(),
        short_desc: L.en.apps.Zendesk.actions.tickets.events.shortDesc(),
        desc: L.en.apps.Zendesk.actions.tickets.events.longDesc(),
        type: 'list',
        example_value: [
          {
            field_name: 'subject',
            id: 206091192546,
            type: 'Create',
            value: 'My printer is on fire!',
          },
        ],
      },
    },
  },
} satisfies IActionResponse;

const updateTicket = async (ticketUpdate: TActionData<typeof options>) => {
  const { ticket_id, ...ticket } = ticketUpdate.ticket;

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
  api_function: updateTicket,
  options,
  response_type,
  _localizationGroup: 'tickets',
} satisfies TQorePartialActionWithFunction<typeof options, typeof response_type>;
