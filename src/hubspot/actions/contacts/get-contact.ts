import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';
import { IContactInterface } from 'hubspot/models/contacts';

// Defining a function to get a contact
const options: IActionOptions = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.contacts.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.id.longDesc(),
    example_value: 123,
  },
} as IActionOptions;
export const response_type: IActionResponse = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.hubspot.actions.contacts.id.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.id.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.id.longDesc(),
    example_value: 123,
  },
  properties: {
    name: 'properties',
    display_name: L.en.apps.hubspot.actions.contacts.properties.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.properties.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.properties.longDesc(),
    example_value: {
      hs_createdate: '2024-08-30T07:46:55.158Z',
      hs_lastmodifieddate: '2024-08-30T07:47:05.869Z',
      hs_object_id: '360210657899',
    },
    type: {
      createdate: {
        type: 'string',
        name: 'createdate',
        display_name: L.en.apps.hubspot.actions.contacts.createdate.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.createdate.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.createdate.longDesc(),
        example_value: '2021-08-25',
      },
      email: {
        type: 'string',
        name: 'email',
        display_name: L.en.apps.hubspot.actions.contacts.email.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.email.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.email.longDesc(),
        example_value: 'john@example.com',
      },
      firstname: {
        type: 'string',
        name: 'firstname',
        display_name: L.en.apps.hubspot.actions.contacts.firstname.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.firstname.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.firstname.longDesc(),
        example_value: 'John',
      },
      hs_object_id: {
        type: 'number',
        name: 'hs_object_id',
        display_name: L.en.apps.hubspot.actions.contacts.hs_object_id.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.hs_object_id.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.hs_object_id.longDesc(),
        example_value: 123,
      },
      lastmodifieddate: {
        type: 'string',
        name: 'lastmodifieddate',
        display_name: L.en.apps.hubspot.actions.contacts.lastmodifieddate.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.lastmodifieddate.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.lastmodifieddate.longDesc(),
        example_value: '2021-08-25T09:00:00Z',
      },
      lastname: {
        type: 'string',
        name: 'lastname',
        display_name: L.en.apps.hubspot.actions.contacts.lastname.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.lastname.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.lastname.longDesc(),
        example_value: 'Doe',
      },
    },
  },
  createdAt: {
    type: 'string',
    name: 'created_at',
    display_name: L.en.apps.hubspot.actions.contacts.created_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.created_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.created_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  updatedAt: {
    type: 'string',
    name: 'updated_at',
    display_name: L.en.apps.hubspot.actions.contacts.updated_at.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.updated_at.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.updated_at.longDesc(),
    example_value: '2021-08-25T09:00:00Z',
  },
  archived: {
    type: 'boolean',
    name: 'archived',
    display_name: L.en.apps.hubspot.actions.contacts.archived.displayName(),
    short_desc: L.en.apps.hubspot.actions.contacts.archived.shortDesc(),
    desc: L.en.apps.hubspot.actions.contacts.archived.longDesc(),
    example_value: true,
  },
} as IActionResponse;
const getContact = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: IContactInterface = await hubspotRequest(`/objects/contacts/${id}`, 'GET');
    return data;
  } catch (error) {
    console.error('Error geting contact:', error);
    throw error;
  }
};

export default {
  action: 'get_contact',
  api_function: getContact,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
