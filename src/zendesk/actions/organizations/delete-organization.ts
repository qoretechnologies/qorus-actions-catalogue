import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete organization
const options: IActionOptions = null;
// const response_type: IActionResponse = null;
const deleteOrganization = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await zendeskRequest(`/organizations/${id}.json`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete organization:', error);
    throw error;
  }
};

export default {
  action: 'delete_organization',
  api_function: deleteOrganization,
  options,
  // response_type,
} as TQorePartialActionWithFunction<typeof options>;
