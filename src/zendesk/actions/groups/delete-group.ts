import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { TGroupsOptions } from 'zendesk/models/groups';

// Defining a function to delete group
const deleteGroup = async ({ id }: TGroupsOptions) => {
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
  app_function: deleteGroup,
  options: null,
  response_type: null,
} satisfies TQorePartialActionWithFunction;
