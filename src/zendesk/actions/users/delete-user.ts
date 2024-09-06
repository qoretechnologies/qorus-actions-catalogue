import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to delete user
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.Zendesk.actions.users.user_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.user_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.user_id.longDesc(),
    example_value: 123,
  },
  name: {
    type: 'string',
    name: 'name',
    display_name: L.en.apps.Zendesk.actions.users.name.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.name.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.name.longDesc(),
    example_value: 'John Doe',
  },
  active: {
    type: 'boolean',
    name: 'active',
    display_name: L.en.apps.Zendesk.actions.users.active.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.active.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.active.longDesc(),
    example_value: true,
  },
};
const deleteUser = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await zendeskRequest(`/users/${id}.json`, 'DELETE');

    return data;
  } catch (error) {
    console.error('Error delete user:', error);
    throw error;
  }
};

export default {
  action: 'delete_user',
  api_function: deleteUser,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
