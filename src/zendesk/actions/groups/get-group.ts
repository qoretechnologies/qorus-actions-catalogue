import { zendeskRequest } from "../../client";
import { IGroupInterface } from "zendesk/models/groups";

interface IGetGroup {
    groupId: number
}

// Defining a function to fetch group by id
export const getGroup = async ({ groupId }: IGetGroup) => {
    try {
        const data: IGroupInterface = await zendeskRequest(`/groups/${groupId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching group:', error);
        throw error;
    }
};