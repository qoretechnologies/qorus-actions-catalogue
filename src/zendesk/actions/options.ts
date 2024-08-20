import { IQoreAppActionOption } from 'global/models/qore';
import { TTicketsOptions } from 'zendesk/models/tickets';
import { TGroupsOptions } from 'zendesk/models/groups';
// import { TOrganizationOptions } from 'zendesk/models/organizations';
import { L } from '../../i18n/i18n-node';
// import { TAttachmentOptions } from 'zendesk/models/attachments';
import { TOrganizationOptions } from 'zendesk/models/organizations';
import { TUserOptions } from 'zendesk/models/users';

export const ticketCreateUpdate: TTicketsOptions = {
  comment: {
    display_name: L.en.apps.zendesk.actions.tickets.comment.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.comment.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.comment.longDesc(),
    type: 'string',
    required: true,
    example_value: 'Comment'
  },
  priority: {
    display_name: L.en.apps.zendesk.actions.tickets.priority.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.priority.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.priority.longDesc(),
    type: 'string',
    required: true,
    example_value: 'High'
  },
  subject: {
    display_name: L.en.apps.zendesk.actions.tickets.subject.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.subject.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.subject.longDesc(),
    type: 'string',
    required: true,
    example_value: 'New Ticket',
  },
  status: {
    display_name: L.en.apps.zendesk.actions.tickets.status.displayName(),
    short_desc: L.en.apps.zendesk.actions.tickets.status.shortDesc(),
    desc: L.en.apps.zendesk.actions.tickets.status.longDesc(),
    type: 'string',
    required: true,
    example_value: 'New',
  },
}

export const groupCreateUpdate: TGroupsOptions = {
  created_at: {
    display_name: L.en.apps.zendesk.actions.groups.created_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.created_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.created_at.longDesc(),
    type: 'string',
    required: true,
    example_value: '2021-09-01T00:00:00Z',
  },
  default: {
    display_name: L.en.apps.zendesk.actions.groups.default.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.default.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.default.longDesc(),
    type: 'boolean',
    required: true,
    example_value: true,
  },
  description: {
    display_name: L.en.apps.zendesk.actions.groups.description.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.description.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.description.longDesc(),
    type: 'string',
    required: true,
    example_value: 'Support',
  },
  deleted: {
    display_name: L.en.apps.zendesk.actions.groups.deleted.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.deleted.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.deleted.longDesc(),
    type: 'boolean',
    required: true,
    example_value: false,
  },
  id: {
    display_name: L.en.apps.zendesk.actions.groups.id.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.id.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.id.longDesc(),
    type: '*number',
    required: true,
    example_value: 123,
  },
  is_public: {
    display_name: L.en.apps.zendesk.actions.groups.is_public.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.is_public.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.is_public.longDesc(),
    type: 'boolean',
    required: true,
    example_value: true,
  },
  name: {
    display_name: L.en.apps.zendesk.actions.groups.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.name.longDesc(),
    type: 'string',
    required: true,
    example_value: 'Support',
  },
  updated_at: {
    display_name: L.en.apps.zendesk.actions.groups.updated_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.updated_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.updated_at.longDesc(),
    type: 'string',
    required: true,
    example_value: '2021-09-01T00:00:00Z',
  },
  url: {
    display_name: L.en.apps.zendesk.actions.groups.url.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.url.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.url.longDesc(),
    type: 'string',
    required: true,
    example_value: 'https://example.com/groups/123',
  }
}

export const organizationCreateUpdate: TOrganizationOptions = {
  name: {
    display_name: L.en.apps.zendesk.actions.organizations.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.name.longDesc(),
    type: 'string',
    required: true,
    example_value: 'Acme Corporation',
  }
}

// export const attachmentCreateUpdate: TAttachmentOptions = {

//   content_url: {
//     display_name: L.en.apps.zendesk.actions.attachments.content_url.displayName(),
//     short_desc: L.en.apps.zendesk.actions.attachments.content_url.shortDesc(),
//     desc: L.en.apps.zendesk.actions.attachments.content_url.longDesc(),
//     type: 'string',
//     required: true,
//     example_value: 'https://example.com/content',
//   },
//   file_name: {
//     display_name: L.en.apps.zendesk.actions.attachments.file_name.displayName(),
//     short_desc: L.en.apps.zendesk.actions.attachments.file_name.shortDesc(),
//     desc: L.en.apps.zendesk.actions.attachments.file_name.longDesc(),
//     type: 'string',
//     required: true,
//     example_value: 'file.txt',
//   },
//   id: {
//     display_name: L.en.apps.zendesk.actions.attachments.id.displayName(),
//     short_desc: L.en.apps.zendesk.actions.attachments.id.shortDesc(),
//     desc: L.en.apps.zendesk.actions.attachments.id.longDesc(),
//     type: '*number',
//     required: true,
//     example_value: 123,
//   },
//   size: {
//     display_name: L.en.apps.zendesk.actions.attachments.size.displayName(),
//     short_desc: L.en.apps.zendesk.actions.attachments.size.shortDesc(),
//     desc: L.en.apps.zendesk.actions.attachments.size.longDesc(),
//     type: '*number',
//     required: true,
//     example_value: 123,
//   },
// }

// export const organizationCreateUpdate:TOrganizationOptions={
//   created_at: {
//     display_name: L.en.apps.zendesk.actions.organizations.created_at.displayName(),
//     short_desc: L.en.apps.zendesk.actions.organizations.created_at.shortDesc(),
//     desc: L.en.apps.zendesk.actions.organizations.created_at.longDesc(),
//     type: 'string',
//     required: true,
//     example_value: '2021-09-01T00:00:00Z',
//   },
//   details:{
//     display_name: L.en.apps.zendesk.actions.organizations.details.displayName(),
//     short_desc: L.en.apps.zendesk.actions.organizations.details.shortDesc(),
//     desc: L.en.apps.zendesk.actions.organizations.details.longDesc(),
//     type: 'string',
//     required: true,
//     example_value: 'Details',
//   },

// }

export const userCreateUpdate: TUserOptions = {
  custom_role_id: {
    display_name: L.en.apps.zendesk.actions.users.custom_role_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.custom_role_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.custom_role_id.longDesc(),
    type: '*number',
    required: true,
    example_value: 123,
  },
  email: {
    display_name: L.en.apps.zendesk.actions.users.email.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.email.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.email.longDesc(),
    type: 'string',
    required: true,
    example_value: 'john@example.com',
  },
  // identities:{
  //   display_name: L.en.apps.zendesk.actions.users.identities.displayName(),
  //   short_desc: L.en.apps.zendesk.actions.users.identities.shortDesc(),
  //   desc: L.en.apps.zendesk.actions.users.identities.longDesc(),
  //   type: 'string',
  //   required: true,
  //   example_value: '123',
  // },
  name: {
    display_name: L.en.apps.zendesk.actions.users.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.name.longDesc(),
    type: 'string',
    required: true,
    example_value: 'John Doe',
  },
  // organization:{
  //   display_name: L.en.apps.zendesk.actions.users.organization.displayName(),
  //   short_desc: L.en.apps.zendesk.actions.users.organization.shortDesc(),
  //   desc: L.en.apps.zendesk.actions.users.organization.longDesc(),
  //   type: '*number',
  //   required: true,
  //   example_value: 123,
  // },
  role: {
    display_name: L.en.apps.zendesk.actions.users.role.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.role.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.role.longDesc(),
    type: 'string',
    required: true,
    example_value: 'end-user',
  },
}





export const ZendeskOptions = {
  users: {
    userCreateUpdate,

  
    userId: {
      display_name: L.en.apps.zendesk.actions.users.user_id.displayName(),
      short_desc: L.en.apps.zendesk.actions.users.user_id.shortDesc(),
      desc: L.en.apps.zendesk.actions.users.user_id.longDesc(),
      type: 'number',
      required: true,
      example_value: 123,
    },
    count: {
      display_name: 'Count',
      short_desc: 'Count',
      desc: 'Count',
      type: 'boolean',
      required: false,
      example_value: true,
    },
    showMandyIds: {
      display_name: 'Show Many Tickets',
      short_desc: 'Show Many Tickets',
      desc: 'Show Many Tickets',
      type: 'string',
      required: false,
      example_value: '10,5,22',
    },
    type: {
      display_name: 'User Type',
      short_desc: 'User Type',
      desc: 'User Type',
      type: 'string',
      required: false,
      example_value: 'followers',
    },
  },

  attachments: {
    // attachmentCreateUpdate,
    token: {
      display_name: L.en.apps.zendesk.actions.attachments.token.displayName(),
      short_desc: L.en.apps.zendesk.actions.attachments.token.shortDesc(),
      desc: L.en.apps.zendesk.actions.attachments.token.longDesc(),
      type: 'string',
      required: true,
      example_value: '44adee',
    },
    id: {
      display_name: L.en.apps.zendesk.actions.attachments.id.displayName(),
      short_desc: L.en.apps.zendesk.actions.attachments.id.shortDesc(),
      desc: L.en.apps.zendesk.actions.attachments.id.longDesc(),
      type: 'number',
      required: true,
      example_value: 123,
    }
  },

  groups: {
    groupCreateUpdate,
    id: {
      display_name: L.en.apps.zendesk.actions.groups.id.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.id.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.id.longDesc(),
      type: 'number',
      required: true,
      example_value: 123,
    }
  },
  organization: {
    organizationCreateUpdate,
    organizationId: {
      display_name: 'Organization ID',
      short_desc: 'Organization ID',
      desc: 'Organization ID',
      type: 'number',
      required: true,
      example_value: 123,
    },
    count: {
      display_name: 'Count',
      short_desc: 'Count',
      desc: 'Count',
      type: 'boolean',
      required: false,
      example_value: true,
    },
  },
  tickets: {
    ticketCreateUpdate,
    ticket_id: {
      display_name: L.en.apps.zendesk.actions.tickets.ticket_id.displayName(),
      short_desc: L.en.apps.zendesk.actions.tickets.ticket_id.shortDesc(),
      desc: L.en.apps.zendesk.actions.tickets.ticket_id.longDesc(),
      type: 'number',
      required: true,
      example_value: 123,
    },
    count: {
      display_name: 'Count',
      short_desc: 'Count',
      desc: 'Count',
      type: 'boolean',
      required: false,
      example_value: true,
    },
    showMandyIds: {
      display_name: 'Show Many Tickets',
      short_desc: 'Show Many Tickets',
      desc: 'Show Many Tickets',
      type: 'string',
      required: false,
      example_value: '10,5,22',
    },
    type: {
      display_name: 'Ticket Type',
      short_desc: 'Ticket Type',
      desc: 'Ticket Type',
      type: 'string',
      required: false,
      example_value: 'followers',
    },
    variant: {
      display_name: 'Ticket Variant',
      short_desc: 'Ticket Variant',
      desc: 'Ticket Variant',
      type: 'string',
      required: false,
      example_value: 'followers',
    },
    onlyDeleted: {
      display_name: 'Deleted Tickets',
      short_desc: 'Deleted Tickets',
      desc: 'Show only deleted tickets?',
      type: 'boolean',
      required: false,
      example_value: true,
    }
  },
} satisfies Record<string, Record<string, IQoreAppActionOption | Record<string, IQoreAppActionOption>>>;

