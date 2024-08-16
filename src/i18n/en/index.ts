import type { BaseTranslation } from '../i18n-types';

const en = {
  common: {},
  apps: {
    zendesk: {
      displayName: 'Zendesk',
      shortDesc: 'Collection of actions to interact with Zendesk API',
      longDesc: 'Collection of actions to interact with Zendesk API',
      actions: {
        users: {
          get_user: {
            displayName: 'Get User',
            shortDesc: 'Get user by ID',
            longDesc: 'Get user by ID',
          },
          user_id: {
            displayName: 'User ID',
            shortDesc: 'User ID',
            longDesc: 'User ID',
          },
        },
        attachments: {
          content_type: {
            displayName: 'Content Type',
            shortDesc: 'Content Type',
            longDesc: 'Content Type',
          },
          content_url: {
            displayName: 'Content URL',
            shortDesc: 'Content URL',
            longDesc: 'Content URL',
          },
          deleted: {
            displayName: 'Deleted',
            shortDesc: 'Deleted',
            longDesc: 'Deleted',
          },
          file_name: {
            displayName: 'File Name',
            shortDesc: 'File Name',
            longDesc: 'File Name',
          },
          height: {
            displayName: 'Height',
            shortDesc: 'Height',
            longDesc: 'Height',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'ID',
            longDesc: 'ID',
          },
          inline: {
            displayName: 'Inline',
            shortDesc: 'Inline',
            longDesc: 'Inline',
          },
          size: {
            displayName: 'Size',
            shortDesc: 'Size',
            longDesc: 'Size',
          },
          thumbnails: {
            displayName: 'Thumbnails',
            shortDesc: 'Thumbnails',
            longDesc: 'Thumbnails',
          },
          url: {
            displayName: 'URL',
            shortDesc: 'URL',
            longDesc: 'URL',
          },
          width: {
            displayName: 'Width',
            shortDesc: 'Width',
            longDesc: 'Width',
          },
          mapped_content_url: {
            displayName: 'Mapped Content URL',
            shortDesc: 'Mapped Content URL',
            longDesc: 'Mapped Content URL',
          },
          upload: {
            displayName: 'Upload',
            shortDesc: 'Upload an attachment',
            longDesc: 'Upload an attachment',
          },
          token: {
            displayName: 'Zendesk Token',
            shortDesc: 'Zendesk API token',
            longDesc: 'Zendesk API token',
          },
        },
        tickets: {
          comment: {
            displayName: 'Comment',
            shortDesc: 'Comment on a ticket',
            longDesc: 'Comment on a ticket',
          },
          subject: {
            displayName: 'Subject',
            shortDesc: 'Subject of a ticket',
            longDesc: 'Subject of a ticket',
          },
          priority: {
            displayName: 'Priority',
            shortDesc: 'Priority of a ticket',
            longDesc: 'Priority of a ticket',
          },
          create_ticket: {
            displayName: 'Create Ticket',
            shortDesc: 'Create a new ticket',
            longDesc: 'Create a new ticket',
          },
          update_ticket: {
            displayName: 'Update Ticket',
            shortDesc: 'Update a ticket',
            longDesc: 'Update a ticket',
          },
          get_ticket: {
            displayName: 'Get Ticket',
            shortDesc: 'Get a ticket',
            longDesc: 'Get a ticket',
          },
          ticket_id: {
            displayName: 'Ticket ID',
            shortDesc: 'Ticket ID',
            longDesc: 'Ticket ID',
          },
          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the ticket was created',
            longDesc: 'The date and time the ticket was created',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'The ticket’s name',
            longDesc: 'The ticket’s name',
          },
          collaborator_ids: {
            displayName: 'Collaborator IDs',
            shortDesc: 'IDs of the ticket’s collaborators',
            longDesc: 'IDs of the ticket’s collaborators',
          },
          assignee_id: {
            displayName: 'Assignee ID',
            shortDesc: 'The ID of the ticket’s assignee',
            longDesc: 'The ID of the ticket’s assignee',
          },
          custom_fields: {
            displayName: 'Custom Fields',
            shortDesc: 'Custom fields of the ticket',
            longDesc: 'Custom fields of the ticket',
          },
          custom_status_id: {
            displayName: 'Custom Status ID',
            shortDesc: 'The ID of the ticket’s custom status',
            longDesc: 'The ID of the ticket’s custom status',
          },
          description: {
            displayName: 'Description',
            shortDesc: 'The ticket’s description',
            longDesc: 'The ticket’s description',
          },
          url: {
            displayName: 'URL',
            shortDesc: 'The ticket’s URL',
            longDesc: 'The ticket’s URL',
          },
          due_at: {
            displayName: 'Due At',
            shortDesc: 'The date and time the ticket is due',
            longDesc: 'The date and time the ticket is due',
          },
          external_id: {
            displayName: 'External ID',
            shortDesc: 'The ticket’s external ID',
            longDesc: 'The ticket’s external ID',
          },
          follower_ids: {
            displayName: 'Follower IDs',
            shortDesc: 'IDs of the ticket’s followers',
            longDesc: 'IDs of the ticket’s followers',
          },
          from_messaging_channel: {
            displayName: 'From Messaging Channel',
            shortDesc: 'Whether the ticket was created from a messaging channel',
            longDesc: 'Whether the ticket was created from a messaging channel',
          },
          group_id: {
            displayName: 'Group ID',
            shortDesc: 'The ID of the ticket’s group',
            longDesc: 'The ID of the ticket’s group',
          },
          has_incidents: {
            displayName: 'Group ID',
            shortDesc: 'The ID of the ticket’s group',
            longDesc: 'The ID of the ticket’s group',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'The ticket’s ID',
            longDesc: 'The ticket’s ID',
          },
          organization_id: {
            displayName: 'Organization ID',
            shortDesc: 'The ID of the ticket’s organization',
            longDesc: 'The ID of the ticket’s organization',
          },
          portal_id: {
            displayName: 'Portal ID',
            shortDesc: 'The ID of the ticket’s portal',
            longDesc: 'The ID of the ticket’s portal',
          },
          problem_id: {
            displayName: 'Problem ID',
            shortDesc: 'The ID of the ticket’s problem',
            longDesc: 'The ID of the ticket’s problem',
          },
          raw_subject: {
            displayName: 'Raw Subject',
            shortDesc: 'The raw subject of the ticket',
            longDesc: 'The raw subject of the ticket',
          },
          recipient: {
            displayName: 'Recipient',
            shortDesc: 'The ticket’s recipient',
            longDesc: 'The ticket’s recipient',
          },
          requester_id: {
            displayName: 'Requester ID',
            shortDesc: 'The ID of the ticket’s requester',
            longDesc: 'The ID of the ticket’s requester',
          },
          sharing_agreement_ids: {
            displayName: 'Sharing Agreement IDs',
            shortDesc: 'IDs of the ticket’s sharing agreements',
            longDesc: 'IDs of the ticket’s sharing agreements',
          },
          status: {
            displayName: 'Status',
            shortDesc: 'The ticket’s status',
            longDesc: 'The ticket’s status',
          },
          submitter_id: {
            displayName: 'Submitter ID',
            shortDesc: 'The ID of the ticket’s submitter',
            longDesc: 'The ID of the ticket’s submitter',
          },
          tags: {
            displayName: 'Tags',
            shortDesc: 'The ticket’s tags',
            longDesc: 'The ticket’s tags',
          },
          type: {
            displayName: 'Type',
            shortDesc: 'The ticket’s type',
            longDesc: 'The ticket’s type',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the ticket was last updated',
            longDesc: 'The date and time the ticket was last updated',
          },
          satisfaction_rating: {
            displayName: 'Satisfaction Rating',
            shortDesc: 'Satisfaction rating of the ticket',
            longDesc: 'Satisfaction rating of the ticket',
            score: {
              displayName: 'Score',
              shortDesc: 'Score of the satisfaction rating',
              longDesc: 'Score of the satisfaction rating',
            },
            comment: {
              displayName: 'Comment',
              shortDesc: 'Comment of the satisfaction rating',
              longDesc: 'Comment of the satisfaction rating',
            },
            id: {
              displayName: 'ID',
              shortDesc: 'ID of the satisfaction rating',
              longDesc: 'ID of the satisfaction rating',
            },
            created_at: {
              displayName: 'Created At',
              shortDesc: 'The date and time the satisfaction rating was created',
              longDesc: 'The date and time the satisfaction rating was created',
            },
            updated_at: {
              displayName: 'Updated At',
              shortDesc: 'The date and time the satisfaction rating was last updated',
              longDesc: 'The date and time the satisfaction rating was last updated',
            }
          },
          via: {
            displayName: 'Via',
            shortDesc: 'Channel through which the ticket was created',
            longDesc: 'Channel through which the ticket was created',
            channel: {
              displayName: 'Channel',
              shortDesc: 'Channel of the ticket',
              longDesc: 'Channel of the ticket',
            },
          },
          count: {
            displayName: 'Count',
            shortDesc: 'Count of tickets',
            longDesc: 'Count of tickets',
          },
          audit: {
            displayName: 'Audit',
            shortDesc: 'Audit of tickets',
            longDesc: 'Audit of tickets',
          },
          events: {
            displayName: 'Events',
            shortDesc: 'Events of tickets',
            longDesc: 'Events of tickets',
          }
        },
        groups: {
          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the group was created',
            longDesc: 'The date and time the group was created',
          },
          default: {
            displayName: 'Default',
            shortDesc: 'Whether the group is default',
            longDesc: 'Whether the group is default',
          },
          description: {
            displayName: 'Description',
            shortDesc: 'The group’s description',
            longDesc: 'The group’s description',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'The group’s ID',
            longDesc: 'The group’s ID',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'The group’s name',
            longDesc: 'The group’s name',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the group was last updated',
            longDesc: 'The date and time the group was last updated',
          },
          count: {
            displayName: 'Count',
            shortDesc: 'Count of groups',
            longDesc: 'Count of groups',
          },
          deleted: {
            displayName: 'Deleted',
            shortDesc: 'Whether the group is deleted',
            longDesc: 'Whether the group is deleted',
          },
          is_public: {
            displayName: 'Is Public',
            shortDesc: 'Whether the group is public',
            longDesc: 'Whether the group is public',
          },
          url: {
            displayName: 'URL',
            shortDesc: 'The group’s URL',
            longDesc: 'The group’s URL',
          },
          groups: {
            displayName: 'Groups',
            shortDesc: 'Groups',
            longDesc: 'Groups',
          },
        },
        organizations: {
          displayName: 'Organizations',
          shortDesc: 'Organizations',
          longDesc: 'Organizations',
          count: {
            displayName: 'Count',
            shortDesc: 'Count of organizations',
            longDesc: 'Count of organizations',
          },
          next_page: {
            displayName: 'Next Page',
            shortDesc: 'Next page of organizations',
            longDesc: 'Next page of organizations',
          },
          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the organization was created',
            longDesc: 'The date and time the organization was created',
          },
          details: {
            displayName: 'Details',
            shortDesc: 'Details of the organization',
            longDesc: 'Details of the organization',
          },
          domain_names: {
            displayName: 'Domain Names',
            shortDesc: 'Domain names of the organization',
            longDesc: 'Domain names of the organization',
          },
          external_id: {
            displayName: 'External ID',
            shortDesc: 'The organization’s external ID',
            longDesc: 'The organization’s external ID',
          },
          group_id: {
            displayName: 'Group ID',
            shortDesc: 'The ID of the organization’s group',
            longDesc: 'The ID of the organization’s group',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'The organization’s ID',
            longDesc: 'The organization’s ID',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'The organization’s name',
            longDesc: 'The organization’s name',
          },
          notes: {
            displayName: 'Notes',
            shortDesc: 'Notes of the organization',
            longDesc: 'Notes of the organization',
          },
          organization_fields: {
            displayName: 'Organization Fields',
            shortDesc: 'Organization fields',
            longDesc: 'Organization fields',
            datepudding: {
              displayName: 'DatePudding',
              shortDesc: 'DatePudding of the organization',
              longDesc: 'DatePudding of the organization',
            },
            org_field_1: {
              displayName: 'Org Field 1',
              shortDesc: 'Organization field 1',
              longDesc: 'Organization field 1',
            },
            org_field_2: {
              displayName: 'Org Field 2',
              shortDesc: 'Organization field 2',
              longDesc: 'Organization field 2',
            }
          },
          shared_comments: {
            displayName: 'Shared Comments',
            shortDesc: 'Whether the organization has shared comments',
            longDesc: 'Whether the organization has shared comments',
          },
          shared_tickets: {
            displayName: 'Shared Tickets',
            shortDesc: 'Whether the organization has shared tickets',
            longDesc: 'Whether the organization has shared tickets',
          },
          tags: {
            displayName: 'Tags',
            shortDesc: 'The organization’s tags',
            longDesc: 'The organization’s tags',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the organization was last updated',
            longDesc: 'The date and time the organization was last updated',
          },
          url: {
            displayName: 'URL',
            shortDesc: 'The organization’s URL',
            longDesc: 'The organization’s URL',
          },
        }
      },
    },
  }
} satisfies BaseTranslation;

export default en;
