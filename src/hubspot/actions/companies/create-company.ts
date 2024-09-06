import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';
import { IResponseCompanyInterface } from 'hubspot/models/companies';

// Defining a function to create a company
const options: IActionOptions = {
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.companies.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.companies.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.companies.properties.longDesc(),
    type: {
      name: {
        type: 'string',
        name: 'name',
        display_name: L.en.apps.hubspot.actions.companies.name.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.name.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.name.longDesc(),
        example_value: 'John Doe',
      },
      domain: {
        type: 'string',
        name: 'domain',
        display_name: L.en.apps.hubspot.actions.companies.domain.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.domain.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.domain.longDesc(),
        example_value: 'example.com',
      },
      city: {
        type: 'string',
        name: 'city',
        display_name: L.en.apps.hubspot.actions.companies.city.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.city.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.city.longDesc(),
        example_value: 'New York',
      },
      industry: {
        type: 'string',
        name: 'industry',
        display_name: L.en.apps.hubspot.actions.companies.industry.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.industry.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.industry.longDesc(),
        example_value: 'Technology',
      },
      phone: {
        type: 'string',
        name: 'phone',
        display_name: L.en.apps.hubspot.actions.companies.phone.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.phone.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.phone.longDesc(),
        example_value: '+1234567890',
      },
      state: {
        type: 'string',
        name: 'state',
        display_name: L.en.apps.hubspot.actions.companies.state.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.state.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.state.longDesc(),
        example_value: 'NY',
      },
      lifecyclestage: {
        type: 'string',
        name: 'lifecyclestage',
        display_name: L.en.apps.hubspot.actions.companies.lifecyclestage.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.lifecyclestage.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.lifecyclestage.longDesc(),
        example_value: 'Lead',
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
      hs_lastmodifieddate: {
        type: 'string',
        name: 'hs_lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_lastmodifieddate.longDesc(),
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
      hs_object_source: {
        type: 'string',
        name: 'hs_object_source',
        display_name: L.en.apps.hubspot.actions.companies.hs_object_source.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_object_source.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_object_source.longDesc(),
        example_value: 'CRM',
      },
      hs_object_source_id: {
        type: 'string',
        name: 'hs_object_source_id',
        display_name: L.en.apps.hubspot.actions.companies.hs_object_source_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_object_source_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_object_source_id.longDesc(),
        example_value: '123',
      },
      hs_object_source_label: {
        type: 'string',
        name: 'hs_object_source_label',
        display_name: L.en.apps.hubspot.actions.companies.hs_object_source_label.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_object_source_label.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_object_source_label.longDesc(),
        example_value: 'CRM',
      },
      hs_pipeline: {
        type: 'string',
        name: 'hs_pipeline',
        display_name: L.en.apps.hubspot.actions.companies.hs_pipeline.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.hs_pipeline.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.hs_pipeline.longDesc(),
        example_value: 'default',
      },
      lifecyclestage: {
        type: 'string',
        name: 'lifecyclestage',
        display_name: L.en.apps.hubspot.actions.companies.lifecyclestage.displayName(),
        short_desc: L.en.apps.hubspot.actions.companies.lifecyclestage.shortDesc(),
        desc: L.en.apps.hubspot.actions.companies.lifecyclestage.longDesc(),
        example_value: 'Lead',
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
const createCompany = async (company: TActionData<typeof options>) => {
  try {
    const data: IResponseCompanyInterface = await hubspotRequest('/objects/companies', 'POST', {
      company,
    });
    return data;
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

export default {
  action: 'create_company',
  api_function: createCompany,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
