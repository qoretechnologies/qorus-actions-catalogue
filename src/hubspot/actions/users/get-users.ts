import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch users
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  results: {
    type: 'list',
    name: 'results',
    display_name: L.en.apps.hubspot.actions.users.results.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.results.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.results.longDesc(),
    example_value: [
      {
        id: '3609',
        properties: {},
        archived: false,
      },
    ],
  },
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.users.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.properties.longDesc(),
    example_value: {
      hs_createdate: '2024-08-30T07:46:55.158Z',
      hs_lastmodifieddate: '2024-08-30T07:47:05.869Z',
      hs_object_id: '360210657899',
    },
    type: {
      hs_createdate: {
        type: 'string',
        name: 'hs_createdate',
        display_name: L.en.apps.hubspot.actions.users.properties.hs_createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.users.properties.hs_createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.users.properties.hs_createdate.longDesc(),
        example_value: '2024-08-30T07:46:55.158Z',
      },
      hs_lastmodifieddate: {
        type: 'string',
        name: 'hs_lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.users.properties.hs_lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.users.properties.hs_lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.users.properties.hs_lastmodifieddate.longDesc(),
        example_value: '2024-08-30T07:47:05.869Z',
      },
      hs_object_id: {
        type: 'string',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.users.properties.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.users.properties.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.users.properties.hs_object_id.longDesc(),
        example_value: '360210657899',
      },
    },
  },
  createdAt: {
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.hubspot.actions.users.created_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.created_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  updatedAt: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.hubspot.actions.users.updated_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.updated_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.updated_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  archived: {
    type: 'boolean',
    name: 'archived',
    display_name: L.en.apps.hubspot.actions.users.archived.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.archived.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.archived.longDesc(),
    example_value: true,
  },
} as IActionResponse;

const getUsers = async () => {
  try {
    const data: TActionData<typeof options> = await hubspotRequest('/objects/users', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default {
  action: 'get_users',
  api_function: getUsers,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
