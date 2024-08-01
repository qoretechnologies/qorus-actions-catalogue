import { IResponseGroupInterface, IUpdateCreateGroupInterface } from "src/zendesk/models/groups";
import { zendeskRequest } from "../..";

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