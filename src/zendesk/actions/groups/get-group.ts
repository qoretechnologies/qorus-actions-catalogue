import { IQoreAppActionWithFunction } from 'global/models/qore';
import { IGroupInterface } from 'zendesk/models/groups';
import { zendeskRequest } from '../../client';

interface IGetGroup {
  groupId: number;
}

// Defining a function to fetch group by id
const getGroup = async ({ groupId }: IGetGroup) => {
  try {
    const data: IGroupInterface = await zendeskRequest(`/groups/${groupId}.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching group:', error);
    throw error;
  }
};

export default {
  app_function: getGroup,
  response_type: {
    created_at: '*string',
    id: '*number',
    name: '*string',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
