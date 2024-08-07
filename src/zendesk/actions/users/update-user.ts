import { IQoreAppActionWithFunction } from 'global/models/qore';
import { IResponseUserInterface, IUpdateCreateUserInterface } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';

interface IUpdateUser {
  userId: number;
  userUpdate: IUpdateCreateUserInterface;
}

// Defining a function to update a user
const updateUser = async ({ userId, userUpdate }: IUpdateUser) => {
  try {
    const data: IResponseUserInterface = await zendeskRequest(`/users/${userId}.json`, 'POST', {
      user: userUpdate,
    });
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};
export default {
  app_function: updateUser,
  response_type: {
    created_at: '*string',
    id: '*number',
    name: '*string',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
