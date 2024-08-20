import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { TUserOptions } from 'zendesk/models/users';
import { IActionOptions, IActionResponse } from 'global/models/actions';


// Defining a function to delete user
const deleteUser = async ({ id }:TUserOptions) => {
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
  app_function: deleteUser,
  options: null,
  response_type: null,
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;
