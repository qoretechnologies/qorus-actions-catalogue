import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IOrganizationInterface } from 'zendesk/models/organizations';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to fetch organization by id
const options: IActionOptions = {
  organizationId: ZendeskOptions.organization.organizationId,
};
const response_type: IActionResponse = {
  created_at: {
    type: '*date',
    name: 'created_at',
    display_name: L.en.apps.zendesk.actions.organizations.created_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.created_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  details: {
    type: '*string',
    name: 'details',
    display_name: L.en.apps.zendesk.actions.organizations.details.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.details.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.details.longDesc(),
    example_value: 'Details about the organization',
  },
  domain_names: {
    type: '*list',
    name: 'domain_names',
    display_name: L.en.apps.zendesk.actions.organizations.domain_names.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.domain_names.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.domain_names.longDesc(),
    example_value: ['example.com', 'example.org'],
  },
  external_id: {
    type: '*string',
    name: 'external_id',
    display_name: L.en.apps.zendesk.actions.organizations.external_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.external_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.external_id.longDesc(),
    example_value: 'external123',
  },
  group_id: {
    type: '*number',
    name: 'group_id',
    display_name: L.en.apps.zendesk.actions.organizations.group_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.group_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.group_id.longDesc(),
    example_value: 123,
  },
  id: {
    type: '*number',
    name: 'id',
    display_name: L.en.apps.zendesk.actions.organizations.id.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.id.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.id.longDesc(),
    example_value: 123,
  },
  name: {
    type: '*string',
    name: 'name',
    display_name: L.en.apps.zendesk.actions.organizations.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.name.longDesc(),
    example_value: 'Organization Name',
  },
  notes: {
    type: '*string',
    name: 'notes',
    display_name: L.en.apps.zendesk.actions.organizations.notes.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.notes.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.notes.longDesc(),
    example_value: 'Important information about the organization',
  },
  organization_fields: {
    name: 'organization_fields',
    type: {
      datepudding: {
        type: '*date',
        name: 'datepudding',
        display_name: L.en.apps.zendesk.actions.organizations.organization_fields.datepudding.displayName(),
        short_desc: L.en.apps.zendesk.actions.organizations.organization_fields.datepudding.shortDesc(),
        desc: L.en.apps.zendesk.actions.organizations.organization_fields.datepudding.longDesc(),
        example_value: '2018-11-04T00:00:00+00:00',
      },
      org_field_1: {
        type: '*date',
        name: 'string',
        display_name: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_1.displayName(),
        short_desc: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_1.shortDesc(),
        desc: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_1.longDesc(),
        example_value: 'happy',
      },
      org_field_2: {
        type: '*date',
        name: 'string',
        display_name: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_2.displayName(),
        short_desc: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_2.shortDesc(),
        desc: L.en.apps.zendesk.actions.organizations.organization_fields.org_field_2.longDesc(),
        example_value: 'teapot_kettle',
      },
    },
    display_name: L.en.apps.zendesk.actions.organizations.organization_fields.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.organization_fields.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.organization_fields.longDesc(),
    example_value: {
      datepudding: '2018-11-04T00:00:00+00:00',
      org_field_1: 'happy happy',
      org_field_2: 'teapot_kettle',
    },
  },
  shared_comments: {
    type: '*boolean',
    name: 'shared_comments',
    display_name: L.en.apps.zendesk.actions.organizations.shared_comments.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.shared_comments.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.shared_comments.longDesc(),
    example_value: true,
  },
  shared_tickets: {
    type: '*boolean',
    name: 'shared_tickets',
    display_name: L.en.apps.zendesk.actions.organizations.shared_tickets.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.shared_tickets.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.shared_tickets.longDesc(),
    example_value: true,
  },
  tags: {
    type: '*list',
    name: 'tags',
    display_name: L.en.apps.zendesk.actions.organizations.tags.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.tags.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.tags.longDesc(),
    example_value: ['tag1', 'tag2'],
  },
  updated_at: {
    type: '*date',
    name: 'updated_at',
    display_name: L.en.apps.zendesk.actions.organizations.updated_at.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.updated_at.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.updated_at.longDesc(),
    example_value: '2021-09-01T00:00:00Z',
  },
  url: {
    type: '*string',
    name: 'url',
    display_name: L.en.apps.zendesk.actions.organizations.url.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.url.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.url.longDesc(),
    example_value: 'https://example.com/organizations/123',
  },
}as IActionResponse;
const getOrganization = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: IOrganizationInterface = await zendeskRequest(
      `/organizations/${id}.json`,
      'GET'
    );
    return data;
  } catch (error) {
    console.error('Error fetching organization:', error);
    throw error;
  }
};

export default {
  action: 'get_organization',
  app_function: getOrganization,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;

