import { IResponseGroupInterface, IUpdateCreateGroupInterface } from "zendesk/models/groups";
import { zendeskRequest } from "../../client";

// Defining a function to create a group
export const createGroup = async (groupCreate: IUpdateCreateGroupInterface) => {
    try {
        const data: IResponseGroupInterface = await zendeskRequest('/groups', 'POST', {
            group: groupCreate
        });
        return data;
    } catch (error) {
        console.error('Error creating group:', error);
        throw error;
    }
};