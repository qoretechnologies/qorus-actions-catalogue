import { zendeskRequest } from "../../client";
import { IUserInterface } from "zendesk/models/users";

interface IGetUser {
    userId: number
}

// Defining a function to fetch user by id
export const getUser = async ({ userId }: IGetUser) => {
    try {
        const data: IUserInterface = await zendeskRequest(`/users/${userId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};