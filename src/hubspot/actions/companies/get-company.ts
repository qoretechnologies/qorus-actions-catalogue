import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';
import { ICompanyInterface } from 'hubspot/models/companies';

// Defining a function to get a company
const options: IActionOptions = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.companies.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.id.longDesc(),
    example_value: 123,
  },
} as IActionOptions;
export const response_type: IActionResponse = {
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
        name: 'hs_createdate',
        display_name: L.en.apps.hubspot.actions.companies.properties.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.properties.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.properties.createdate.longDesc(),
        example_value: '2024-08-30T07:46:55.158Z',
      },
      domain: {
        type: 'string',
        name: 'domain',
        display_name: L.en.apps.hubspot.actions.companies.properties.domain.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.properties.domain.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.properties.domain.longDesc(),
        example_value: 'example.com',
      },
      hs_lastmodifieddate: {
        type: 'string',
        name: 'hs_lastmodifieddate',
        display_name:
          L.en.apps.hubspot.actions.companies.properties.hs_lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.properties.hs_lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.properties.hs_lastmodifieddate.longDesc(),
        example_value: '2024-08-30T07:47:05.869Z',
      },
      hs_object_id: {
        type: 'string',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.companies.properties.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.properties.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.properties.hs_object_id.longDesc(),
        example_value: '360210657899',
      },
      name: {
        type: 'string',
        name: 'name',
        display_name: L.en.apps.hubspot.actions.companies.properties.name.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.properties.name.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.properties.name.longDesc(),
        example_value: 'Example Company',
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
const getCompany = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: ICompanyInterface = await hubspotRequest(`/objects/companies/${id}`, 'GET');
    return data;
  } catch (error) {
    console.error('Error geting Company:', error);
    throw error;
  }
};

export default {
  action: 'get_Company',
  api_function: getCompany,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
