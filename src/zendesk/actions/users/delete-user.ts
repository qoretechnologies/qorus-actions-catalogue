import { zendeskRequest } from "../../client";

// Defining a function to delete user
export const deleteUser = async ({ userId }) => {
    try {
        const data = await zendeskRequest(`/users/${userId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete user:', error);
        throw error;
    }
};