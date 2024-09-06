import { IResponseOrganizationInterface } from 'zendesk/models/organizations';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to create a Organization
const options: IActionOptions = ZendeskOptions.organization.organizationCreateUpdate;
export const response_type: IActionResponse = {
  created_at: {
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.Zendesk.actions.organizations.created_at.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.created_at.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  details: {
    type: 'string',
    name: 'details',
    display_name: L.en.apps.Zendesk.actions.organizations.details.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.details.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.details.longDesc(),
    example_value: 'Details about the organization',
  },
  domain_names: {
    type: 'list',
    name: 'domain_names',
    display_name: L.en.apps.Zendesk.actions.organizations.domain_names.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.domain_names.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.domain_names.longDesc(),
    example_value: ['example.com', 'example.org'],
  },
  external_id: {
    type: 'string',
    name: 'external_id',
    display_name: L.en.apps.Zendesk.actions.organizations.external_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.external_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.external_id.longDesc(),
    example_value: 'external123',
  },
  group_id: {
    type: 'number',
    name: 'group_id',
    display_name: L.en.apps.Zendesk.actions.organizations.group_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.group_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.group_id.longDesc(),
    example_value: 123,
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.Zendesk.actions.organizations.id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.id.longDesc(),
    example_value: 123,
  },
  name: {
    type: 'string',
    name: 'name',
    display_name: L.en.apps.Zendesk.actions.organizations.name.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.name.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.name.longDesc(),
    example_value: 'Organization Name',
  },
  notes: {
    type: 'string',
    name: 'notes',
    display_name: L.en.apps.Zendesk.actions.organizations.notes.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.notes.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.notes.longDesc(),
    example_value: 'Important information about the organization',
  },
  organization_fields: {
    type: {
      datepudding: {
        type: 'string',
        name: 'datepudding',
        display_name:
          L.en.apps.Zendesk.actions.organizations.organization_fields.datepudding.displayName(),
        short_desc:
          L.en.apps.Zendesk.actions.organizations.organization_fields.datepudding.shortDesc(),
        desc: L.en.apps.Zendesk.actions.organizations.organization_fields.datepudding.longDesc(),
        example_value: '2018-11-04T00:00:00+00:00',
      },
      org_field_1: {
        type: 'string',
        name: 'string',
        display_name:
          L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_1.displayName(),
        short_desc:
          L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_1.shortDesc(),
        desc: L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_1.longDesc(),
        example_value: 'happy',
      },
      org_field_2: {
        type: 'string',
        name: 'string',
        display_name:
          L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_2.displayName(),
        short_desc:
          L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_2.shortDesc(),
        desc: L.en.apps.Zendesk.actions.organizations.organization_fields.org_field_2.longDesc(),
        example_value: 'teapot_kettle',
      },
    },
    name: 'organization_fields',
    display_name: L.en.apps.Zendesk.actions.organizations.organization_fields.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.organization_fields.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.organization_fields.longDesc(),
    example_value: {
      datepudding: '2018-11-04T00:00:00+00:00',
      org_field_1: 'happy happy',
      org_field_2: 'teapot_kettle',
    },
  },
  shared_comments: {
    type: 'boolean',
    name: 'shared_comments',
    display_name: L.en.apps.Zendesk.actions.organizations.shared_comments.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.shared_comments.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.shared_comments.longDesc(),
    example_value: true,
  },
  shared_tickets: {
    type: 'boolean',
    name: 'shared_tickets',
    display_name: L.en.apps.Zendesk.actions.organizations.shared_tickets.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.shared_tickets.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.shared_tickets.longDesc(),
    example_value: true,
  },
  tags: {
    type: 'list',
    name: 'tags',
    display_name: L.en.apps.Zendesk.actions.organizations.tags.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.tags.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.tags.longDesc(),
    example_value: ['tag1', 'tag2'],
  },
  updated_at: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.Zendesk.actions.organizations.updated_at.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.updated_at.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.updated_at.longDesc(),
    example_value: '2021-09-01T00:00:00Z',
  },
  url: {
    type: 'string',
    name: 'url',
    display_name: L.en.apps.Zendesk.actions.organizations.url.displayName(),
    short_desc: L.en.apps.Zendesk.actions.organizations.url.shortDesc(),
    desc: L.en.apps.Zendesk.actions.organizations.url.longDesc(),
    example_value: 'https://example.com/organizations/123',
  },
} as IActionResponse;
const createOrganization = async (organization: TActionData<typeof options>) => {
  try {
    const data: IResponseOrganizationInterface = await zendeskRequest(
      '/organizations',
      'POST',
      organization
    );

    return data;
  } catch (error) {
    console.error('Error creating organization:', error);
    throw error;
  }
};

export default {
  action: 'create_organization',
  api_function: createOrganization,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
