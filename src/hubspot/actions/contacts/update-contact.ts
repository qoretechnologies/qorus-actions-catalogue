import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { IResponseContactInterface } from 'hubspot/models/contacts';

// Defining a function to update a contact
const options: IActionOptions = {
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
      favorite_food: {
        type: 'string',
        name: 'favorite_food',
        display_name: L.en.apps.hubspot.actions.contacts.favorite_food.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.favorite_food.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.favorite_food.longDesc(),
        example_value: 'Pizza',
      },
      jobtitle: {
        type: 'string',
        name: 'jobtitle',
        display_name: L.en.apps.hubspot.actions.contacts.jobtitle.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.jobtitle.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.jobtitle.longDesc(),
        example_value: 'Software Engineer',
      },
      lifecyclestage: {
        type: 'string',
        name: 'lifecyclestage',
        display_name: L.en.apps.hubspot.actions.contacts.lifecyclestage.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.lifecyclestage.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.lifecyclestage.longDesc(),
        example_value: 'Lead',
      },
    },
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
      favorite_food: {
        type: 'string',
        name: 'favorite_food',
        display_name: L.en.apps.hubspot.actions.contacts.favorite_food.displayName(),
        short_desc: L.en.apps.hubspot.actions.contacts.favorite_food.shortDesc(),
        desc: L.en.apps.hubspot.actions.contacts.favorite_food.longDesc(),
        example_value: 'Pizza',
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

const updateContact = async (ContactUpdate: TActionData<typeof options>) => {
  const { id, ...properties } = ContactUpdate;
  try {
    const response: IResponseContactInterface = await hubspotRequest(
      `objects/contacts/${id}`,
      'PATCH',
      properties
    );
    return response;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};
export default {
  action: 'update_contact',
  api_function: updateContact,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
