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
          items: {
            displayName: 'Items',
            shortDesc: 'Items',
            longDesc: 'Items',
          },
          users: {
            displayName: 'Users',
            shortDesc: 'Users',
            longDesc: 'Users',
            id: {
              displayName: 'ID',
              shortDesc: 'ID',
              longDesc: 'ID',
            },
            name: {
              displayName: 'Name',
              shortDesc: 'Name',
              longDesc: 'Name',
            },
          },
          active: {
            displayName: 'Active',
            shortDesc: 'Active',
            longDesc: 'Active',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'Name',
            longDesc: 'Name',
          },
          custom_role_id: {
            displayName: 'Custom Role ID',
            shortDesc: 'Custom Role ID',
            longDesc: 'Custom Role ID',
          },
          email: {
            displayName: 'Email',
            shortDesc: 'Email',
            longDesc: 'Email',
          },
          organization: {
            displayName: 'Organization',
            shortDesc: 'Organization',
            longDesc: 'Organization',
          },
          role: {
            displayName: 'Role',
            shortDesc: 'Role',
            longDesc: 'Role',
          },
          role_type: {
            displayName: 'Role Type',
            shortDesc: 'Role Type',
            longDesc: 'Role Type',
          },
          organization_id: {
            displayName: 'Organization ID',
            shortDesc: 'Organization ID',
            longDesc: 'Organization ID',
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
            },
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
          },
          tickets: {
            displayName: 'Tickets',
            shortDesc: 'Tickets',
            longDesc: 'Tickets',
          },
          next_page: {
            displayName: 'Next Page',
            shortDesc: 'Next page of tickets',
            longDesc: 'Next page of tickets',
          },
          previous_page: {
            displayName: 'Previous Page',
            shortDesc: 'Previous page of tickets',
            longDesc: 'Previous page of tickets',
          },
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
          users: {
            displayName: 'Users',
            shortDesc: 'Users',
            longDesc: 'Users',
          },
          next_page: {
            displayName: 'Next Page',
            shortDesc: 'Next page of groups',
            longDesc: 'Next page of groups',
          },
          previoud_page: {
            displayName: 'Previous Page',
            shortDesc: 'Previous page of groups',
            longDesc: 'Previous page of groups',
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
            },
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
        },
      },
    },
    hubspot: {
      displayName: 'hubspot',
      shortDesc: 'Collection of actions to interact with hubspot API',
      longDesc: 'Collection of actions to interact with hubspot API',
      actions: {
        users: {
          results: {
            displayName: 'Results',
            shortDesc: 'Results of the action',
            longDesc: 'Results of the action',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'Name of the user',
            longDesc: 'Name of the user',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'ID of the user',
            longDesc: 'ID of the user',
          },
          email: {
            displayName: 'Email',
            shortDesc: 'Email of the user',
            longDesc: 'Email of the user',
          },
          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the user was created',
            longDesc: 'The date and time the user was created',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the user was last updated',
            longDesc: 'The date and time the user was last updated',
          },
          archived: {
            displayName: 'Archived',
            shortDesc: 'Whether the user is archived',
            longDesc: 'Whether the user is archived',
          },
          properties: {
            displayName: 'Properties',
            shortDesc: 'Properties of the user',
            longDesc: 'Properties of the user',
            hs_standard_time_zone: {
              displayName: 'Standard Time Zone',
              shortDesc: 'Standard Time Zone of the user',
              longDesc: 'Standard Time Zone of the user',
            },
            hs_working_hours: {
              displayName: 'Working Hours',
              shortDesc: 'Working Hours of the user',
              longDesc: 'Working Hours of the user',
            },
            hs_createdate: {
              displayName: 'Create Date',
              shortDesc: 'Create Date of the user',
              longDesc: 'Create Date of the user',
            },
            hs_lastmodifieddate: {
              displayName: 'Last Modified Date',
              shortDesc: 'Last Modified Date of the user',
              longDesc: 'Last Modified Date of the user',
            },
            hs_object_id: {
              displayName: 'Object ID',
              shortDesc: 'Object ID of the user',
              longDesc: 'Object ID of the user',
            },
          },
        },
        deals: {
          results: {
            displayName: 'Results',
            shortDesc: 'Results of the action',
            longDesc: 'Results of the action',
            id: {
              displayName: 'ID',
              shortDesc: 'ID of the deal',
              longDesc: 'ID of the deal',
            },
          },
          properties: {
            displayName: 'Properties',
            shortDesc: 'Properties of the deal',
            longDesc: 'Properties of the deal',
          },
          amount: {
            displayName: 'Amount',
            shortDesc: 'Amount of the deal',
            longDesc: 'Amount of the deal',
          },
          closedate: {
            displayName: 'Close Date',
            shortDesc: 'Close Date of the deal',
            longDesc: 'Close Date of the deal',
          },
          createdate: {
            displayName: 'Create Date',
            shortDesc: 'Create Date of the deal',
            longDesc: 'Create Date of the deal',
          },
          hs_lastmodifieddate: {
            displayName: 'Last Modified Date',
            shortDesc: 'Last Modified Date of the deal',
            longDesc: 'Last Modified Date of the deal',
          },
          hs_object_id: {
            displayName: 'Object ID',
            shortDesc: 'Object ID of the deal',
            longDesc: 'Object ID of the deal',
          },
          pipeline: {
            displayName: 'Pipeline',
            shortDesc: 'Pipeline of the deal',
            longDesc: 'Pipeline of the deal',
          },
          hs_standard_time_zone: {
            displayName: 'Standard Time Zone',
            shortDesc: 'Standard Time Zone of the deal',
            longDesc: 'Standard Time Zone of the deal',
          },
          dealstage: {
            displayName: 'Deal Stage',
            shortDesc: 'Deal Stage of the deal',
            longDesc: 'Deal Stage of the deal',
          },
          dealname: {
            displayName: 'Deal Name',
            shortDesc: 'Deal Name of the deal',
            longDesc: 'Deal Name of the deal',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'ID of the user',
            longDesc: 'ID of the user',
          },

          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the user was created',
            longDesc: 'The date and time the user was created',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the user was last updated',
            longDesc: 'The date and time the user was last updated',
          },
          archived: {
            displayName: 'Archived',
            shortDesc: 'Whether the user is archived',
            longDesc: 'Whether the user is archived',
          },
        },
        contacts: {
          results: {
            displayName: 'Results',
            shortDesc: 'Results of the action',
            longDesc: 'Results of the action',
            id: {
              displayName: 'ID',
              shortDesc: 'ID of the deal',
              longDesc: 'ID of the deal',
            },
          },
          properties: {
            displayName: 'Properties',
            shortDesc: 'Properties of the deal',
            longDesc: 'Properties of the deal',
          },
          amount: {
            displayName: 'Amount',
            shortDesc: 'Amount of the deal',
            longDesc: 'Amount of the deal',
          },
          closedate: {
            displayName: 'Close Date',
            shortDesc: 'Close Date of the deal',
            longDesc: 'Close Date of the deal',
          },
          createdate: {
            displayName: 'Create Date',
            shortDesc: 'Create Date of the deal',
            longDesc: 'Create Date of the deal',
          },
          hs_lastmodifieddate: {
            displayName: 'Last Modified Date',
            shortDesc: 'Last Modified Date of the deal',
            longDesc: 'Last Modified Date of the deal',
          },
          hs_object_id: {
            displayName: 'Object ID',
            shortDesc: 'Object ID of the deal',
            longDesc: 'Object ID of the deal',
          },
          pipeline: {
            displayName: 'Pipeline',
            shortDesc: 'Pipeline of the deal',
            longDesc: 'Pipeline of the deal',
          },
          hs_standard_time_zone: {
            displayName: 'Standard Time Zone',
            shortDesc: 'Standard Time Zone of the deal',
            longDesc: 'Standard Time Zone of the deal',
          },
          dealstage: {
            displayName: 'Deal Stage',
            shortDesc: 'Deal Stage of the deal',
            longDesc: 'Deal Stage of the deal',
          },
          dealname: {
            displayName: 'Deal Name',
            shortDesc: 'Deal Name of the deal',
            longDesc: 'Deal Name of the deal',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'ID of the user',
            longDesc: 'ID of the user',
          },

          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the user was created',
            longDesc: 'The date and time the user was created',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the user was last updated',
            longDesc: 'The date and time the user was last updated',
          },
          archived: {
            displayName: 'Archived',
            shortDesc: 'Whether the user is archived',
            longDesc: 'Whether the user is archived',
          },
          contactstage: {
            displayName: 'Contact Stage',
            shortDesc: 'Contact Stage of the deal',
            longDesc: 'Contact Stage of the deal',
          },
          email: {
            displayName: 'Email',
            shortDesc: 'Email of the deal',
            longDesc: 'Email of the deal',
          },
          firstname: {
            displayName: 'First Name',
            shortDesc: 'First Name of the deal',
            longDesc: 'First Name of the deal',
          },
          lastname: {
            displayName: 'Last Name',
            shortDesc: 'Last Name of the deal',
            longDesc: 'Last Name of the deal',
          },
          phone: {
            displayName: 'Phone',
            shortDesc: 'Phone of the deal',
            longDesc: 'Phone of the deal',
          },
          website: {
            displayName: 'Website',
            shortDesc: 'Website of the deal',
            longDesc: 'Website of the deal',
          },
          company: {
            displayName: 'Company',
            shortDesc: 'Company of the deal',
            longDesc: 'Company of the deal',
          },
          lifecyclestage: {
            displayName: 'Lifecycle Stage',
            shortDesc: 'Lifecycle Stage of the deal',
            longDesc: 'Lifecycle Stage of the deal',
          },
          lastmodifieddate: {
            displayName: 'Last Modified Date',
            shortDesc: 'Last Modified Date of the deal',
            longDesc: 'Last Modified Date of the deal',
          },
          jobtitle: {
            displayName: 'Job Title',
            shortDesc: 'Job Title of the deal',
            longDesc: 'Job Title of the deal',
          },
          favorite_food: {
            displayName: 'Favorite Food',
            shortDesc: 'Favorite Food of the deal',
            longDesc: 'Favorite Food of the deal',
          },
        },
        companies: {
          results: {
            displayName: 'Results',
            shortDesc: 'Results of the action',
            longDesc: 'Results of the action',
          },
          properties: {
            displayName: 'Properties',
            shortDesc: 'Properties of the deal',
            longDesc: 'Properties of the deal',
            createdate: {
              displayName: 'Create Date',
              shortDesc: 'Create Date of the deal',
              longDesc: 'Create Date of the deal',
            },
            domain: {
              displayName: 'Domain',
              shortDesc: 'Domain of the deal',
              longDesc: 'Domain of the deal',
            },
            hs_lastmodifieddate: {
              displayName: 'Last Modified Date',
              shortDesc: 'Last Modified Date of the deal',
              longDesc: 'Last Modified Date of the deal',
            },
            hs_object_id: {
              displayName: 'Object ID',
              shortDesc: 'Object ID of the deal',
              longDesc: 'Object ID of the deal',
            },
            name: {
              displayName: 'Name',
              shortDesc: 'Name of the deal',
              longDesc: 'Name of the deal',
            },
          },

          id: {
            displayName: 'ID',
            shortDesc: 'ID of the deal',
            longDesc: 'ID of the deal',
          },

          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the user was created',
            longDesc: 'The date and time the user was created',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the user was last updated',
            longDesc: 'The date and time the user was last updated',
          },
          archived: {
            displayName: 'Archived',
            shortDesc: 'Whether the user is archived',
            longDesc: 'Whether the user is archived',
          },
          createdate: {
            displayName: 'Create Date',
            shortDesc: 'Create Date of the deal',
            longDesc: 'Create Date of the deal',
          },
          hs_object_id: {
            displayName: 'Object ID',
            shortDesc: 'Object ID of the deal',
            longDesc: 'Object ID of the deal',
          },
          lastmodifieddate: {
            displayName: 'Last Modified Date',
            shortDesc: 'Last Modified Date of the deal',
            longDesc: 'Last Modified Date of the deal',
          },
          hs_pinned_engagement_id: {
            displayName: 'Pinned Engagement ID',
            shortDesc: 'Pinned Engagement ID of the deal',
            longDesc: 'Pinned Engagement ID of the deal',
          },
          name: {
            displayName: 'Name',
            shortDesc: 'Name of the deal',
            longDesc: 'Name of the deal',
          },
          domain: {
            displayName: 'Domain',
            shortDesc: 'Domain of the deal',
            longDesc: 'Domain of the deal',
          },
          city: {
            displayName: 'City',
            shortDesc: 'City of the deal',
            longDesc: 'City of the deal',
          },
          industry: {
            displayName: 'Industry',
            shortDesc: 'Industry of the deal',
            longDesc: 'Industry of the deal',
          },
          phone: {
            displayName: 'Phone',
            shortDesc: 'Phone of the deal',
            longDesc: 'Phone of the deal',
          },
          state: {
            displayName: 'State',
            shortDesc: 'State of the deal',
            longDesc: 'State of the deal',
          },
          lifecyclestage: {
            displayName: 'Lifecycle Stage',
            shortDesc: 'Lifecycle Stage of the deal',
            longDesc: 'Lifecycle Stage of the deal',
          },
          hs_lastmodifieddate: {
            displayName: 'Last Modified Date',
            shortDesc: 'Last Modified Date of the deal',
            longDesc: 'Last Modified Date of the deal',
          },
          hs_object_source: {
            displayName: 'Object Source',
            shortDesc: 'Object Source of the deal',
            longDesc: 'Object Source of the deal',
          },
          hs_object_source_id: {
            displayName: 'Object Source ID',
            shortDesc: 'Object Source ID of the deal',
            longDesc: 'Object Source ID of the deal',
          },
          hs_object_source_label: {
            displayName: 'Object Source Label',
            shortDesc: 'Object Source Label of the deal',
            longDesc: 'Object Source Label of the deal',
          },
          hs_pipeline: {
            displayName: 'Pipeline',
            shortDesc: 'Pipeline of the deal',
            longDesc: 'Pipeline of the deal',
          },
        },
        owners:{
          results: {
            displayName: 'Results',
            shortDesc: 'Results of the action',
            longDesc: 'Results of the action',
          },
          id: {
            displayName: 'ID',
            shortDesc: 'ID of the deal',
            longDesc: 'ID of the deal',
          },
          created_at: {
            displayName: 'Created At',
            shortDesc: 'The date and time the user was created',
            longDesc: 'The date and time the user was created',
          },
          updated_at: {
            displayName: 'Updated At',
            shortDesc: 'The date and time the user was last updated',
            longDesc: 'The date and time the user was last updated',
          },
          archived: {
            displayName: 'Archived',
            shortDesc: 'Whether the user is archived',
            longDesc: 'Whether the user is archived',
          },
          first_name: {
            displayName: 'First Name',
            shortDesc: 'First Name of the deal',
            longDesc: 'First Name of the deal',
          },
          last_name: {
            displayName: 'Last Name',
            shortDesc: 'Last Name of the deal',
            longDesc: 'Last Name of the deal',
          },
          email: {
            displayName: 'Email',
            shortDesc: 'Email of the deal',
            longDesc: 'Email of the deal',
          },
         type:{
            displayName: 'Type',
            shortDesc: 'Type of the deal',
            longDesc: 'Type of the deal',
          },
          userId:{
            displayName: 'User ID',
            shortDesc: 'User ID of the deal',
            longDesc: 'User ID of the deal',
          },
          userIdIncludingInactive:{
            displayName: 'User ID Including Inactive',
            shortDesc: 'User ID Including Inactive of the deal',
            longDesc: 'User ID Including Inactive of the deal',
          },
          teams:{
            displayName: 'Teams',
            shortDesc: 'Teams of the deal',
            longDesc: 'Teams of the deal',
          },
          name:{
            displayName: 'Name',
            shortDesc: 'Name of the deal',
            longDesc: 'Name of the deal',
          },
          primary:{
            displayName: 'Primary',
            shortDesc: 'Primary of the deal',
            longDesc: 'Primary of the deal',
          },
          
          
        },
        
      },
    },
  },
} satisfies BaseTranslation;

export default en;
