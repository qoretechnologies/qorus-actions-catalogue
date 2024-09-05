import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete group
const options: IActionOptions = null;
const deleteGroup = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await zendeskRequest(`/groups/${id}.json`, 'DELETE');

    return data;
  } catch (error) {
    console.error('Error delete group:', error);
    throw error;
  }
};

export default {
  action: 'delete_group',
  api_function: deleteGroup,
  options,
} as TQorePartialActionWithFunction<typeof options>;
