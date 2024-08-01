import { zendeskRequest } from "../..";
import { IResponseUserInterface, IUpdateCreateUserInterface } from "src/zendesk/models/users";

// Defining a function to update a user
export const updateUser = async (userId: number, userUpdate: IUpdateCreateUserInterface) => {
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