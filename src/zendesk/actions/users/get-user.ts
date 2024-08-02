import { zendeskRequest } from "../../client";
import { IUserInterface } from "zendesk/models/users";

// Defining a function to fetch user by id
export const getUser = async ({ userId }) => {
    try {
        const data: IUserInterface = await zendeskRequest(`/users/${userId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};