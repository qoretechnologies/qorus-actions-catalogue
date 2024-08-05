import { zendeskRequest } from "../../client";

interface IDeleteUser {
    userId: number
}

// Defining a function to delete user
export const deleteUser = async ({ userId }: IDeleteUser) => {
    try {
        const data = await zendeskRequest(`/users/${userId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete user:', error);
        throw error;
    }
};