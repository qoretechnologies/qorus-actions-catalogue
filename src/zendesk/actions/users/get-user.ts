import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IUserInterface} from 'zendesk/models/users';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch user by id

const options: IActionOptions = {
  userId: ZendeskOptions.users.userId,
}
export const response_type: IActionResponse = {
  id: {
    type: '*number',
    name: 'id',
    display_name: L.en.apps.zendesk.actions.users.user_id.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.user_id.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.user_id.longDesc(),
    example_value: 123,
  },
  name: {
    type: 'string',
    name: 'name',
    display_name: L.en.apps.zendesk.actions.users.name.displayName(),
    short_desc: L.en.apps.zendesk.actions.users.name.shortDesc(),
    desc: L.en.apps.zendesk.actions.users.name.longDesc(),
    example_value: 'John Doe',
  },

}
const getUser = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: IUserInterface = await zendeskRequest(`/users/${id}.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export default {
  action: 'get_user',
  app_function: getUser,
  options,
  response_type

} as TQorePartialActionWithFunction<typeof options, typeof response_type>;

