import { IQoreAppActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';

interface IDeleteGroup {
  groupId: number;
}

// Defining a function to delete group
const deleteGroup = async ({ groupId }: IDeleteGroup) => {
  try {
    const data = await zendeskRequest(`/groups/${groupId}.json`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete group:', error);
    throw error;
  }
};

export default {
  app_function: deleteGroup,
  response_type: null,
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
