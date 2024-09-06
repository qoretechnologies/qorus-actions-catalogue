import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { IResponseUserInterface } from 'hubspot/models/users';

// Defining a function to update a user
const options: IActionOptions = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.users.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.id.longDesc(),
    example_value: 123,
  },
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.users.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.properties.longDesc(),
    example_value: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
    },
    type: {
      hs_standard_time_zone: {
        type: 'string',
        name: 'hs_standard_time_zone',
        display_name:
          L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.displayName(),
        short_desc: L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.shortDesc(),
        desc: L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.longDesc(),
        example_value: 'America/Los_Angeles',
      },
    },
  },
} as IActionOptions;
export const response_type: IActionResponse = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.users.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.id.longDesc(),
    example_value: 123,
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

  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.users.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.properties.longDesc(),
    type: {
      hs_standard_time_zone: {
        type: 'string',
        name: 'hs_standard_time_zone',
        display_name:
          L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.displayName(),
        short_desc: L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.shortDesc(),
        desc: L.en.apps.hubspot.actions.users.properties.hs_standard_time_zone.longDesc(),
        example_value: 'America/Los_Angeles',
      },
    },
  },
} as IActionResponse;
const updateUser = async (UserUpdate: TActionData<typeof options>) => {
  const { id, ...properties } = UserUpdate;
  try {
    const data: IResponseUserInterface = await hubspotRequest(
      `/objects/users/${id}`,
      'PATCH',
      properties
    );
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export default {
  action: 'update_user',
  api_function: updateUser,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
