import { IResponseUserInterface, TUserOptions } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse } from 'global/models/actions';



// Defining a function to update a user
const updateUser = async (UserUpdate: TUserOptions) => {
  const { id, ...userUpdate } = UserUpdate
  try {
    const data: IResponseUserInterface = await zendeskRequest(`/users/${id}.json`, 'PUT', {
      user: userUpdate,
    });
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export default {
  action: 'update_user',
  app_function: updateUser,
  options: ZendeskOptions.users.userCreateUpdate,
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
    },
    
  },
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;
