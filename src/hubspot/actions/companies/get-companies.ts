import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to get a companies
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  results: {
    type: 'list',
    name: 'results',
    display_name: L.en.apps.hubspot.actions.companies.results.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.results.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.results.longDesc(),
    example_value: [],
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.companies.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.id.longDesc(),
    example_value: 123,
  },
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.companies.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.properties.longDesc(),
    example_value: {
      hs_createdate: '2024-08-30T07:46:55.158Z',
      hs_lastmodifieddate: '2024-08-30T07:47:05.869Z',
      hs_object_id: '360210657899',
    },
    type: {
      createdate: {
        type: 'string',
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.companies.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.createdate.longDesc(),
        example_value: '2021-08-25',
      },
      domain: {
        type: 'string',
        name: 'domain',
        display_name: L.en.apps.hubspot.actions.companies.domain.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.domain.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.domain.longDesc(),
        example_value: 'example.com',
      },
      hs_lastmodifieddate: {
        type: 'string',
        name: 'hs_lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.longDesc(),
        example_value: '2021-08-25T09:00:00Z',
      },
      hs_object_id: {
        type: 'number',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.companies.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_object_id.longDesc(),
        example_value: 123,
      },
      name: {
        type: 'string',
        name: 'name',
        display_name: L.en.apps.hubspot.actions.companies.name.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.name.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.name.longDesc(),
        example_value: 'John Doe',
      },
    },
  },
  createdAt: {
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.hubspot.actions.companies.created_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.created_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  updatedAt: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.hubspot.actions.companies.updated_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.updated_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.updated_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  archived: {
    type: 'boolean',
    name: 'archived',
    display_name: L.en.apps.hubspot.actions.companies.archived.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.archived.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.archived.longDesc(),
    example_value: true,
  },
} as IActionResponse;
const getCompanies = async () => {
  try {
    const data: TActionData<typeof options> = await hubspotRequest(`/objects/companies`, 'GET');
    return data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export default {
  action: 'create_contact',
  api_function: getCompanies,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
