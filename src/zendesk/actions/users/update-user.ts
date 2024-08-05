import { zendeskRequest } from "../../client";
import { IResponseUserInterface, IUpdateCreateUserInterface } from "zendesk/models/users";

interface IUpdateUser {
    userId: number,
    userUpdate: IUpdateCreateUserInterface
}

// Defining a function to update a user
export const updateUser = async ({ userId, userUpdate }: IUpdateUser) => {
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