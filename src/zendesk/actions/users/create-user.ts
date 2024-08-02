import { IResponseUserInterface } from "zendesk/models/users";
import { zendeskRequest } from "../../client";

// Defining a function to create a user
export const createUser = async ({ userCreate }) => {
    try {
        const data: IResponseUserInterface = await zendeskRequest('/users', 'POST', {
            user: userCreate
        });
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};