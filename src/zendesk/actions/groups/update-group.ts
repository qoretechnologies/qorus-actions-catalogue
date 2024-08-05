import { zendeskRequest } from "../../client";
import { IResponseGroupInterface, IUpdateCreateGroupInterface } from "zendesk/models/groups";

interface IGetGroupUsers {
    groupId: number,
    groupUpdate: IUpdateCreateGroupInterface
}

// Defining a function to update a group
export const updateGroup = async ({ groupId, groupUpdate }: IGetGroupUsers) => {
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