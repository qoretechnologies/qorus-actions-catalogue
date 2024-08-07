import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { IGroupsInterface } from 'zendesk/models/groups';
import { zendeskRequest } from '../../client';

// Defining a function to fetch groups
const getGroups = async () => {
  try {
    const data: IGroupsInterface = await zendeskRequest('/groups.json', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching groups:', error);
    throw error;
  }
};

export default {
  app_function: getGroups,
  response_type: {
    groups: {
      name: 'groups',
      type: '*list',
    } as IQoreTypeObject,
    next_page: '*number',
    previous_page: '*number',
    count: '*number',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
