import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { TOrganizationOptions } from 'zendesk/models/organizations';
import { IActionOptions, IActionResponse } from 'global/models/actions';


// Defining a function to delete organization
const deleteOrganization = async ({ id }: TOrganizationOptions) => {
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
  app_function: deleteOrganization,
  options: null,
  response_type: null,
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;


