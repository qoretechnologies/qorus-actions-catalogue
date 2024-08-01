import { zendeskRequest } from "../..";

// Defining a function to delete group
export const deleteGroup = async (groupId: number) => {
    try {
        const data = await zendeskRequest(`/groups/${groupId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete group:', error);
        throw error;
    }
};