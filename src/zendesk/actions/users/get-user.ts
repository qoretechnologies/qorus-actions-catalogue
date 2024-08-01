import { zendeskRequest } from "../..";
import { IUserInterface } from "src/zendesk/models/users";

// Defining a function to fetch user by id
export const getUser = async (userId: number) => {
    try {
        const data: IUserInterface = await zendeskRequest(`/users/${userId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};