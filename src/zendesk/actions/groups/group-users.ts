import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { zendeskRequest } from '../../client';

interface IGetGroupUsers {
  groupId: number;
}

// Defining a function to fetch group users by id
const getGroupUsers = async ({ groupId }: IGetGroupUsers) => {
  try {
    const data = await zendeskRequest(`/groups/${groupId}/users.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching group users:', error);
    throw error;
  }
};

export default {
  app_function: getGroupUsers,
  response_type: {
    users: {
      name: 'users',
      type: '*list',
    } as IQoreTypeObject,
    next_page: '*number',
    previous_page: '*number',
    count: '*number',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
