import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';
import { IResponseDealInterface } from 'hubspot/models/deals';
// Defining a function to create a deal
const options: IActionOptions = {
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
      createdate: {
        type: 'string',
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.deals.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.createdate.longDesc(),
        example_value: '2021-08-25',
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
    },
  },
} as IActionOptions;
export const response_type: IActionResponse = {
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
      createdate: {
        type: 'string',
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.deals.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.deals.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.deals.createdate.longDesc(),
        example_value: '2021-08-25',
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
const createDeal = async (deal: TActionData<typeof options>) => {
  try {
    const data: IResponseDealInterface = await hubspotRequest('/objects/deals', 'POST', {
      deal,
    });
    return data;
  } catch (error) {
    console.error('Error creating deal:', error);
    throw error;
  }
};

export default {
  action: 'create_deal',
  api_function: createDeal,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
