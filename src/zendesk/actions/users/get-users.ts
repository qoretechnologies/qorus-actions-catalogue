import { zendeskRequest } from "../..";
import { IUsersInterface } from "src/zendesk/models/users";

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