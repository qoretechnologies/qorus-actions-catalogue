import { zendeskRequest } from "../../client";
import { IResponseGroupInterface } from "zendesk/models/groups";

// Defining a function to update a group
export const updateGroup = async ({ groupId, groupUpdate }) => {
    try {
        const data: IResponseGroupInterface = await zendeskRequest(`/groups/${groupId}.json`, 'POST', {
            group: groupUpdate
        });
        return data;
    } catch (error) {
        console.error('Error updating group:', error);
        throw error;
    }
};