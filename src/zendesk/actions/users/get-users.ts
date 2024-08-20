import { IUsersInterface } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch users
const getUsers = async () => {
  try {
    const data: IUsersInterface = await zendeskRequest('/users.json', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default {
  action: 'get_users',
  app_function: getUsers,
  options: null,
  response_type: {

    id:{
      type: '*number',
      name: 'id',
      display_name: L.en.apps.zendesk.actions.users.user_id.displayName(),
      short_desc: L.en.apps.zendesk.actions.users.user_id.shortDesc(),
      desc: L.en.apps.zendesk.actions.users.user_id.longDesc(),
      example_value: 123,
    },
    name:{
      type: '*string',
      name: 'name',
      display_name: L.en.apps.zendesk.actions.users.name.displayName(),
      short_desc: L.en.apps.zendesk.actions.users.name.shortDesc(),
      desc: L.en.apps.zendesk.actions.users.name.longDesc(),
      example_value: 'John Doe',
    }

  },
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;

