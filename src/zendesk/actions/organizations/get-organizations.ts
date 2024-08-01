import { IOrganizationInterface } from "src/zendesk/models/organizations";
import { zendeskRequest } from "../..";

// Defining a function to fetch organization
export const getOrganization = async () => {
    try {
        const data: IOrganizationInterface = await zendeskRequest(`/organizations.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching organization:', error);
        throw error;
    }
};