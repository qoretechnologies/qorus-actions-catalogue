import { IQoreAppActionWithFunction } from 'global/models/qore';
import { IResponseUserInterface, IUpdateCreateUserInterface } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';

interface ICreateUser {
  userCreate: IUpdateCreateUserInterface;
}

// Defining a function to create a user
const createUser = async ({ userCreate }: ICreateUser) => {
  try {
    const data: IResponseUserInterface = await zendeskRequest('/users', 'POST', {
      user: userCreate,
    });
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default {
  app_function: createUser,
  response_type: {
    created_at: '*string',
    id: '*number',
    name: '*string',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
