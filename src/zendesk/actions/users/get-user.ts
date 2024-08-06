import { IQoreAppActionWithFunction } from "global/models/qore";
import { zendeskRequest } from "../../client";
import { IUserInterface } from "zendesk/models/users";

interface IGetUser {
    userId: number
}

// Defining a function to fetch user by id
export const getUser = async ({ userId }: IGetUser) => {
    try {
        const data: IUserInterface = await zendeskRequest(`/users/${userId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export default {
    app_function: getUser,
    response_type: {
      created_at: "*string",
      id: "*number",
      name: "*string"
    },
  } as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>
  