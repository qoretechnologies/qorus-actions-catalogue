import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { zendeskRequest } from '../../client';

interface IGetUserOrganizations {
  userId: number;
}

// Defining a function to fetch user organizations by id
const getUserOrganizations = async ({ userId }: IGetUserOrganizations) => {
  try {
    const data = await zendeskRequest(`/users/${userId}/organizations.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching user organizations:', error);
    throw error;
  }
};

export default {
  app_function: getUserOrganizations,
  response_type: {
    organizations: {
      name: 'organizations',
      type: '*list',
    } as IQoreTypeObject,
    next_page: '*number',
    previous_page: '*number',
    count: '*number',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
