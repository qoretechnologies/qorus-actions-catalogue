import { zendeskRequest } from "../../client";
import { IUsersInterface } from "zendesk/models/users";

// Defining a function to fetch users
export const getUsers = async () => {
    try {
        const data: IUsersInterface = await zendeskRequest('/users.json', 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};