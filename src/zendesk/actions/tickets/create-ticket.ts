import {
  IActionOptions,
  IActionResponse,
  TActionData,
  TActionResponse,
} from 'global/models/actions';
import { TQoreAppActionFunctionContext, TQorePartialActionWithFunction } from 'global/models/qore';
import { Debugger, DebugLevels } from 'utils/Debugger';
import { IZendeskContext, zendeskRequest } from '../../client';

export const options = {
  ticket: {
    required: true,
    type: {
      comment: {
        name: 'comment',
        type: {
          body: {
            name: 'body',
            type: 'string',
            required: true,
            example_value: 'Comment body',
          },
        },
        required: true,
        example_value: {
          body: 'Comment body',
        },
      },
      priority: {
        name: 'priority',
        type: 'string',
        required: true,
        example_value: 'High',
      },
      subject: {
        name: 'subject',
        type: 'string',
        required: true,
        example_value: 'New Ticket',
      },
      status: {
        name: 'status',
        type: 'string',
        required: true,
        example_value: 'New',
      },
    },
  },
} satisfies IActionOptions;

export const response_type = {
  ticket: {
    display_name: 'Ticket',
    short_desc: 'Ticket data',
    desc: 'Ticket data',
    name: 'ticket',
    type: {
      assignee_id: {
        type: 'number',
        name: 'assignee_id',
        example_value: 123,
      },
      collaborator_ids: {
        type: 'list',
        name: 'collaborator_ids',
        example_value: [1, 2, 3],
      },
      created_at: {
        type: 'string',
        name: 'created_at',
        example_value: '2021-08-25T09:00:00Z',
      },
      custom_fields: {
        type: 'list',
        name: 'custom_fields',
        example_value: [
          { id: 1, value: 'Custom Field Value 1' },
          { id: 2, value: 'Custom Field Value 2' },
        ],
      },
      fields: {
        type: 'list',
        name: 'fields',
        example_value: [
          { id: 1, value: 'Field Value 1' },
          { id: 2, value: 'Field Value 2' },
        ],
      },
      custom_status_id: {
        type: 'number',
        name: 'custom_status_id',
        example_value: 123,
      },
      description: {
        type: 'string',
        name: 'description',
        example_value: 'Ticket description',
      },
      due_at: {
        type: 'string',
        name: 'due_at',
        example_value: '2021-08-25T09:00:00Z',
      },
      email_cc_ids: {
        type: 'list',
        example_value: [1, 2, 3],
        name: 'email_cc_ids',
      },
      forum_topic_id: {
        type: 'number',
        name: 'forum_topic_id',
        example_value: 123,
      },
      external_id: {
        type: 'string',
        name: 'external_id',
        example_value: 'external_id_123',
      },
      follower_ids: {
        type: 'list',
        name: 'follower_ids',
        example_value: [1, 2, 3],
      },
      followup_ids: {
        type: 'list',
        name: 'followup_ids',
        example_value: [1, 2, 3],
      },
      from_messaging_channel: {
        type: 'boolean',
        name: 'from_messaging_channel',
        example_value: true,
      },
      generated_timestamp: {
        type: 'number',
        example_value: 0,
        name: 'generated_timestamp',
      },
      group_id: {
        type: 'number',
        name: 'group_id',

        example_value: 123,
      },
      has_incidents: {
        type: 'boolean',
        name: 'has_incidents',
        example_value: true,
      },
      id: {
        type: 'number',
        name: 'id',
        example_value: 123,
      },
      is_public: {
        type: 'boolean',
        name: 'is_public',
        example_value: true,
      },
      organization_id: {
        type: 'number',
        name: 'organization_id',
        example_value: 123,
      },
      priority: {
        type: 'string',
        name: 'priority',
        example_value: 'urgent',
      },
      problem_id: {
        type: 'number',
        name: 'problem_id',
        example_value: 123,
      },
      raw_subject: {
        type: 'string',
        name: 'raw_subject',
        example_value: 'Ticket raw subject',
      },
      recipient: {
        type: 'string',
        name: 'recipient',
        example_value: 'recipient@example.com',
      },
      requester_id: {
        type: 'number',
        name: 'requester_id',
        example_value: 123,
      },
      satisfaction_rating: {
        name: 'satisfaction_rating',
        example_value: {
          score: '9',
          comment: 'Great support!',
          id: 1234,
        },
        type: {
          score: {
            type: 'string',
            name: 'score',
            example_value: '9',
          },
          comment: {
            type: 'string',
            name: 'comment',
            example_value: 'Great support!',
          },
          id: {
            type: 'number',
            name: 'id',
            example_value: 1234,
          },
        },
      },
      sharing_agreement_ids: {
        type: 'list',
        name: 'sharing_agreement_ids',
        example_value: [1, 2, 3],
      },
      status: {
        type: 'string',
        name: 'status',
        example_value: 'open',
      },
      subject: {
        type: 'string',
        name: 'subject',
        example_value: 'Ticket subject',
      },
      submitter_id: {
        type: 'number',
        name: 'submitter_id',
        example_value: 123,
      },
      tags: {
        type: 'list',
        name: 'tags',
      },
      ticket_form_id: {
        type: 'number',
        name: 'ticket_form_id',
        example_value: 123,
      },
      brand_id: {
        type: 'number',
        name: 'brand_id',
        example_value: 123,
      },
      allow_channelback: {
        type: 'boolean',
        name: 'allow_channelback',
        example_value: true,
      },
      allow_attachments: {
        type: 'boolean',
        name: 'allow_attachments',
        example_value: true,
      },
      type: {
        type: 'string',
        name: 'type',
        example_value: 'problem',
      },
      updated_at: {
        type: 'string',
        name: 'updated_at',
        example_value: '2021-08-25T09:00:00Z',
      },
      url: {
        type: 'string',
        name: 'url',
        example_value: 'https://example.zendesk.com/tickets/123',
      },
      via: {
        name: 'via',
        example_value: {
          channel: 'web',
        },
        type: {
          channel: {
            type: 'string',
            name: 'channel',
            example_value: 'web',
          },
        },
      },
    },
  },
} satisfies IActionResponse;

async function createTicket(
  ticket: TActionData<typeof options>,
  options?: any,
  context?: TQoreAppActionFunctionContext<IZendeskContext>
): Promise<TActionResponse<typeof response_type>> {
  try {
    Debugger.level = DebugLevels.Info;
    Debugger.info(`Creating ticket: ${JSON.stringify(ticket)}`);

    const data = await zendeskRequest('/tickets', 'POST', ticket, undefined, context);

    Debugger.info(`Ticket Created: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
}

export type TZendeskCreateTicket = TQorePartialActionWithFunction<
  typeof options,
  typeof response_type
>;

export default {
  action: 'create_ticket',
  api_function: createTicket,
  options,
  response_type,
  _localizationGroup: 'tickets',
} satisfies TZendeskCreateTicket;
