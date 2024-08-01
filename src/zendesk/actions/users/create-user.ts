import { IResponseUserInterface, IUpdateCreateUserInterface } from "src/zendesk/models/users";
import { zendeskRequest } from "../..";

// Defining a function to create a user
export const createUser = async (userCreate: IUpdateCreateUserInterface) => {
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