import { zendeskRequest } from "../../client";

interface IDeleteGroup {
    groupId: number
}

// Defining a function to delete group
export const deleteGroup = async ({ groupId }: IDeleteGroup) => {
    try {
        const data = await zendeskRequest(`/groups/${groupId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete group:', error);
        throw error;
    }
};