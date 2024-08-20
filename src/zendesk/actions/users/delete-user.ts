import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';


// Defining a function to delete user
const options: IActionOptions = null;
const response_type: IActionResponse = null;
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
  app_function: deleteUser,
  options,
  response_type
}as TQorePartialActionWithFunction<typeof options, typeof response_type>;
