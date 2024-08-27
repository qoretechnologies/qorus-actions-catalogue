import { IResponseUserInterface} from 'zendesk/models/users';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';



// Defining a function to update a user
const options: IActionOptions = ZendeskOptions.users.userCreateUpdate;
export const response_type: IActionResponse = {
  id: {
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

}
const updateUser = async (UserUpdate: TActionData<typeof options>) => {
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
  options,
  response_type
}as TQorePartialActionWithFunction<typeof options, typeof response_type>;
