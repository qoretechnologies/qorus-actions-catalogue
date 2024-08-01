import { zendeskRequest } from "../..";
import { IResponseGroupInterface, IUpdateCreateGroupInterface } from "src/zendesk/models/groups";

// Defining a function to update a group
export const updateGroup = async (groupId: number, groupUpdate: IUpdateCreateGroupInterface) => {
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