import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch deals
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  results: {
    type: 'list',
    name: 'results',
    display_name: L.en.apps.hubspot.actions.deals.results.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.results.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.results.longDesc(),
    example_value: [],
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.deals.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.id.longDesc(),
    example_value: 123,
  },
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.deals.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.properties.longDesc(),
    example_value: {
      hs_createdate: '2024-08-30T07:46:55.158Z',
      hs_lastmodifieddate: '2024-08-30T07:47:05.869Z',
      hs_object_id: '360210657899',
    },
    type: {
      amount: {
        type: 'number',
        name: 'amount',
        display_name: L.en.apps.hubspot.actions.deals.amount.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.amount.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.amount.longDesc(),
        example_value: 100,
      },
      closedate: {
        type: 'string',
        name: 'closedate',
        display_name: L.en.apps.hubspot.actions.deals.closedate.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.closedate.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.closedate.longDesc(),
        example_value: '2021-08-25',
      },
      createdate: {
        type: 'string',
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.deals.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.createdate.longDesc(),
        example_value: '2021-08-25',
      },
      dealname: {
        type: 'string',
        name: 'dealname',
        display_name: L.en.apps.hubspot.actions.deals.dealname.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.dealname.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.dealname.longDesc(),
        example_value: 'Deal Name',
      },
      dealstage: {
        type: 'string',
        name: 'dealstage',
        display_name: L.en.apps.hubspot.actions.deals.dealstage.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.dealstage.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.dealstage.longDesc(),
        example_value: 'Qualification',
      },
      hs_lastmodifieddate: {
        type: 'string',
        name: 'hs_lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.deals.hs_lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.hs_lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.hs_lastmodifieddate.longDesc(),
        example_value: '2021-08-25T09:00:00Z',
      },
      hs_object_id: {
        type: 'number',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.deals.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.hs_object_id.longDesc(),
        example_value: 123,
      },
      pipeline: {
        type: 'string',
        name: 'pipeline',
        display_name: L.en.apps.hubspot.actions.deals.pipeline.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.pipeline.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.pipeline.longDesc(),
        example_value: 'Default Pipeline',
      },
    },
  },
  createdAt: {
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.hubspot.actions.deals.created_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.created_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  updatedAt: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.hubspot.actions.deals.updated_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.updated_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.updated_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  archived: {
    type: 'boolean',
    name: 'archived',
    display_name: L.en.apps.hubspot.actions.deals.archived.displayName(),
    short_desc: L.en.apps.hubspot.actions.deals.archived.shortDesc(),
    desc: L.en.apps.hubspot.actions.deals.archived.longDesc(),
    example_value: true,
  },
} as IActionResponse;

const getDeals = async () => {
  try {
    const data: TActionData<typeof options> = await hubspotRequest('/objects/deals', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching deals:', error);
    throw error;
  }
};

export default {
  action: 'get_deals',
  api_function: getDeals,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
