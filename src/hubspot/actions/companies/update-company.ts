import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { IResponseCompanyInterface } from 'hubspot/models/companies';

// Defining a function to update a company
const options: IActionOptions = {
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
      hs_pinned_engagement_id: 1234789,
    },
    type: {
      hs_pinned_engagement_id: {
        type: 'number',
        name: 'hs_pinned_engagement_id',
        display_name: L.en.apps.hubspot.actions.companies.hs_pinned_engagement_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_pinned_engagement_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_pinned_engagement_id.longDesc(),
        example_value: 123,
      },
    },
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
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.companies.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.createdate.longDesc(),
        example_value: '2021-08-25',
      },
      hs_object_id: {
        type: 'number',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.companies.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_object_id.longDesc(),
        example_value: 123,
      },
      lastmodifieddate: {
        type: 'string',
        name: 'lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.companies.lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.lastmodifieddate.longDesc(),
        example_value: '2021-08-25T09:00:00Z',
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

const updateCompany = async (CompanyUpdate: TActionData<typeof options>) => {
  const { companyId, ...properties } = CompanyUpdate;
  try {
    const response: IResponseCompanyInterface = await hubspotRequest(
      `objects/companies/${companyId}`,
      'PATCH',
      properties
    );
    return response;
  } catch (error) {
    console.error('Error updating company:', error);
    throw error;
  }
};
export default {
  action: 'update_company',
  api_function: updateCompany,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
