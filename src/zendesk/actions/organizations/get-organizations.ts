import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { IOrganizationInterface } from 'zendesk/models/organizations';
import { zendeskRequest } from '../../client';

// Defining a function to fetch organization
const getOrganizations = async () => {
  try {
    const data: IOrganizationInterface = await zendeskRequest(`/organizations.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching organization:', error);
    throw error;
  }
};

export default {
  app_function: getOrganizations,
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
