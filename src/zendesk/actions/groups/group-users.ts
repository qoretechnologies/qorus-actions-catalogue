import { zendeskRequest } from "../../client";

interface IGetGroupUsers {
    groupId: number
}

// Defining a function to fetch group users by id
export const getGroupUsers = async ({ groupId }: IGetGroupUsers) => {
    try {
        const data = await zendeskRequest(`/groups/${groupId}/users.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching group users:', error);
        throw error;
    }
};