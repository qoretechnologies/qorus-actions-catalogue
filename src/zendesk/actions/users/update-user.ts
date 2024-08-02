import { zendeskRequest } from "../../client";
import { IResponseUserInterface } from "zendesk/models/users";

// Defining a function to update a user
export const updateUser = async ({ userId, userUpdate }) => {
    try {
        const data: IResponseUserInterface = await zendeskRequest(`/users/${userId}.json`, 'POST', {
            user: userUpdate
        });
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};