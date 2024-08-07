import { IQoreAppActionWithFunction } from 'global/models/qore';
import { IResponseGroupInterface, IUpdateCreateGroupInterface } from 'zendesk/models/groups';
import { zendeskRequest } from '../../client';

interface IGetGroupUsers {
  groupId: number;
  groupUpdate: IUpdateCreateGroupInterface;
}

// Defining a function to update a group
const updateGroup = async ({ groupId, groupUpdate }: IGetGroupUsers) => {
  try {
    const data: IResponseGroupInterface = await zendeskRequest(`/groups/${groupId}.json`, 'POST', {
      group: groupUpdate,
    });
    return data;
  } catch (error) {
    console.error('Error updating group:', error);
    throw error;
  }
};

export default {
  app_function: updateGroup,
  response_type: {
    created_at: '*string',
    id: '*number',
    name: '*string',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
