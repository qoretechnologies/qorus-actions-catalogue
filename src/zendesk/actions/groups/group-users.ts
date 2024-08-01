import { zendeskRequest } from "../..";

// Defining a function to fetch group users by id
export const getGroupUsers = async (groupId: number) => {
    try {
        const data = await zendeskRequest(`/groups/${groupId}/users.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching group users:', error);
        throw error;
    }
};