import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';
import { IOwnerInterface } from 'hubspot/models/owners';

// Defining a function to fetch Owner by id

const options: IActionOptions = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.owners.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.id.longDesc(),
    example_value: 123,
  },
} as IActionOptions;
export const response_type: IActionResponse = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.owners.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.id.longDesc(),
    example_value: 123,
  },
 email:{
    type: 'string',
    name: 'email',
    display_name: L.en.apps.hubspot.actions.owners.email.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.email.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.email.longDesc(),
    example_value: 'owner@example.com',
  },
 type:{
    type: 'string',
    name: 'type',
    display_name: L.en.apps.hubspot.actions.owners.type.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.type.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.type.longDesc(),
    example_value: 'OWNER',
  },
  firstName:{
    type: 'string',
    name: 'first_name',
    display_name: L.en.apps.hubspot.actions.owners.first_name.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.first_name.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.first_name.longDesc(),
    example_value: 'John',
  },
  lastName:{
    type: 'string',
    name: 'last_name',
    display_name: L.en.apps.hubspot.actions.owners.last_name.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.last_name.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.last_name.longDesc(),
    example_value: 'Doe',
  },
  userId:{
    type: 'string',
    name: 'userId',
    display_name: L.en.apps.hubspot.actions.owners.userId.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.userId.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.userId.longDesc(),
    example_value: '123456789',
  },
  userIdIncludingInactive:{
    type: 'string',
    name: 'userIdIncludingInactive',
    display_name: L.en.apps.hubspot.actions.owners.userIdIncludingInactive.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.userIdIncludingInactive.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.userIdIncludingInactive.longDesc(),
    example_value: '123456789',
  },
  createdAt:{
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.hubspot.actions.owners.created_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.created_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.created_at.longDesc(),
    example_value: '2023-05-01T12:00:00Z',
  },
  updatedAt:{
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.hubspot.actions.owners.updated_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.updated_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.updated_at.longDesc(),
    example_value: '2023-05-01T12:00:00Z',
  },
  archived: {
    type: 'boolean',
    name: 'archived',
    display_name: L.en.apps.hubspot.actions.owners.archived.displayName(),
    short_desc: L.en.apps.hubspot.actions.owners.archived.shortDesc(),
    desc: L.en.apps.hubspot.actions.owners.archived.longDesc(),
    example_value: true,
  },
} as IActionResponse;

const getOwner = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: IOwnerInterface = await hubspotRequest(`/owners/${id}`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching Owner:', error);
    throw error;
  }
};

export default {
  action: 'get_owner',
  api_function: getOwner,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
