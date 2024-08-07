import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { IUsersInterface } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';

// Defining a function to fetch users
const getUsers = async () => {
  try {
    const data: IUsersInterface = await zendeskRequest('/users.json', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default {
  app_function: getUsers,
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
