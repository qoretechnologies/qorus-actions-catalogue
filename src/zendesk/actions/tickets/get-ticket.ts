import { TQorePartialActionWithFunction } from 'global/models/qore';
import { ITicketInterface } from 'zendesk/models/tickets';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to fetch ticket by id
const options: IActionOptions = {
  ticket_id: ZendeskOptions.tickets.ticket_id,
};
export const response_type: IActionResponse = {
  assignee_id: {
    type: 'number',
    name: 'assignee_id',
    display_name: L.en.apps.zendesk.actions.tickets.assignee_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.assignee_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.assignee_id.longDesc(),
    example_value: 123,
  },
  collaborator_ids: {
    type: 'list',
    name: 'collaborator_ids',
    display_name: L.en.apps.zendesk.actions.tickets.collaborator_ids.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.collaborator_ids.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.collaborator_ids.longDesc(),
    example_value: [1, 2, 3],
  },
  custom_fields: {
    type: 'list',
    name: 'custom_fields',
    display_name: L.en.apps.zendesk.actions.tickets.custom_fields.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.custom_fields.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.custom_fields.longDesc(),
    example_value: [
      { id: 1, value: 'Custom Field Value 1' },
      { id: 2, value: 'Custom Field Value 2' },
    ],
  },
  custom_status_id: {
    type: 'number',
    name: 'custom_status_id',
    display_name: L.en.apps.zendesk.actions.tickets.custom_status_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.custom_status_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.custom_status_id.longDesc(),
    example_value: 123,
  },
  description: {
    type: 'string',
    name: 'description',
    display_name: L.en.apps.zendesk.actions.tickets.description.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.description.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.description.longDesc(),
    example_value: 'Ticket description',
  },
  due_at: {
    type: 'string',
    name: 'due_at',
    display_name: L.en.apps.zendesk.actions.tickets.due_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.due_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.due_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  external_id: {
    type: 'string',
    name: 'external_id',
    display_name: L.en.apps.zendesk.actions.tickets.external_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.external_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.external_id.longDesc(),
    example_value: 'external_id_123',
  },
  follower_ids: {
    type: 'list',
    name: 'follower_ids',
    display_name: L.en.apps.zendesk.actions.tickets.follower_ids.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.follower_ids.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.follower_ids.longDesc(),
    example_value: [1, 2, 3],
  },
  from_messaging_channel: {
    type: 'boolean',
    name: 'from_messaging_channel',
    display_name: L.en.apps.zendesk.actions.tickets.from_messaging_channel.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.from_messaging_channel.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.from_messaging_channel.longDesc(),
    example_value: true,
  },
  group_id: {
    type: 'number',
    name: 'group_id',
    display_name: L.en.apps.zendesk.actions.tickets.group_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.group_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.group_id.longDesc(),
    example_value: 123,
  },
  has_incidents: {
    type: 'boolean',
    name: 'has_incidents',
    display_name: L.en.apps.zendesk.actions.tickets.has_incidents.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.has_incidents.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.has_incidents.longDesc(),
    example_value: true,
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.zendesk.actions.tickets.id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.id.longDesc(),
    example_value: 123,
  },
  organization_id: {
    type: 'number',
    name: 'organization_id',
    display_name: L.en.apps.zendesk.actions.tickets.organization_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.organization_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.organization_id.longDesc(),
    example_value: 123,
  },
  priority: {
    type: 'string',
    name: 'priority',
    display_name: L.en.apps.zendesk.actions.tickets.priority.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.priority.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.priority.longDesc(),
    example_value: 'urgent',
  },
  problem_id: {
    type: 'number',
    name: 'problem_id',
    display_name: L.en.apps.zendesk.actions.tickets.problem_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.problem_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.problem_id.longDesc(),
    example_value: 123,
  },
  raw_subject: {
    type: 'string',
    name: 'raw_subject',
    display_name: L.en.apps.zendesk.actions.tickets.raw_subject.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.raw_subject.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.raw_subject.longDesc(),
    example_value: 'Ticket raw subject',
  },
  recipient: {
    type: 'string',
    name: 'recipient',
    display_name: L.en.apps.zendesk.actions.tickets.recipient.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.recipient.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.recipient.longDesc(),
    example_value: 'recipient@example.com',
  },
  requester_id: {
    type: 'number',
    name: 'requester_id',
    display_name: L.en.apps.zendesk.actions.tickets.requester_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.requester_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.requester_id.longDesc(),
    example_value: 123,
  },
  satisfaction_rating: {
    name: 'satisfaction_rating',
    display_name: L.en.apps.zendesk.actions.tickets.satisfaction_rating.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.longDesc(),
    example_value: {
      score: '9',
      comment: 'Great support!',
      id: 1234,
    },
    type: {
      score: {
        type: 'string',
        name: 'score',
        display_name: L.en.apps.zendesk.actions.tickets.satisfaction_rating.score.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.score.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.score.longDesc(),
        example_value: '9',
      },
      comment: {
        type: 'string',
        name: 'comment',
        display_name: L.en.apps.zendesk.actions.tickets.satisfaction_rating.comment.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.comment.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.comment.longDesc(),
        example_value: 'Great support!',
      },
      id: {
        type: 'number',
        name: 'id',
        display_name: L.en.apps.zendesk.actions.tickets.satisfaction_rating.id.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.id.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.satisfaction_rating.id.longDesc(),
        example_value: 1234,
      },
    },
  },
  sharing_agreement_ids: {
    type: 'list',
    name: 'sharing_agreement_ids',
    display_name: L.en.apps.zendesk.actions.tickets.sharing_agreement_ids.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.sharing_agreement_ids.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.sharing_agreement_ids.longDesc(),
    example_value: [1, 2, 3],
  },
  status: {
    type: 'string',
    name: 'status',
    display_name: L.en.apps.zendesk.actions.tickets.status.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.status.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.status.longDesc(),
    example_value: 'open',
  },
  subject: {
    type: 'string',
    name: 'subject',
    display_name: L.en.apps.zendesk.actions.tickets.subject.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.subject.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.subject.longDesc(),
    example_value: 'Ticket subject',
  },
  submitter_id: {
    type: 'number',
    name: 'submitter_id',
    display_name: L.en.apps.zendesk.actions.tickets.submitter_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.submitter_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.submitter_id.longDesc(),
    example_value: 123,
  },
  tags: {
    type: 'list',
    name: 'tags',
    display_name: L.en.apps.zendesk.actions.tickets.tags.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.tags.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.tags.longDesc(),
  },
  type: {
    type: 'string',
    name: 'type',
    display_name: L.en.apps.zendesk.actions.tickets.type.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.type.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.type.longDesc(),
    example_value: 'problem',
  },
  updated_at: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.zendesk.actions.tickets.updated_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.updated_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.updated_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  url: {
    type: 'string',
    name: 'url',
    display_name: L.en.apps.zendesk.actions.tickets.url.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.url.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.url.longDesc(),
    example_value: 'https://example.zendesk.com/tickets/123',
  },
  via: {
    name: 'via',
    display_name: L.en.apps.zendesk.actions.tickets.via.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.via.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.via.longDesc(),
    example_value: {
      channel: 'web',
    },
    type: {
      channel: {
        type: 'string',
        name: 'channel',
        display_name: L.en.apps.zendesk.actions.tickets.via.channel.displayName(),
        short_desc: L.en.apps.zendesk.actions.tickets.via.channel.shortDesc(),
        desc: L.en.apps.zendesk.actions.tickets.via.channel.longDesc(),
        example_value: 'web',
      },
    },
  },
} as IActionResponse;

const getTicket = async ({ ticket_id }: TActionData<typeof options>) => {
  try {
    const data: ITicketInterface = await zendeskRequest(`/tickets/${ticket_id}.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching ticket:', error);
    throw error;
  }
};

export default {
  action: 'get_ticket',
  api_function: getTicket,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
