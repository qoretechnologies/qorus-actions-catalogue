import { zendeskRequest } from "../..";
import { IGroupsInterface } from "src/zendesk/models/groups";

// Defining a function to fetch groups
export const getGroups = async () => {
    try {
        const data: IGroupsInterface = await zendeskRequest('/groups.json', 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching groups:', error);
        throw error;
    }
};