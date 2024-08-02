import { IOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";

// Defining a function to fetch organization
export const getOrganizations = async () => {
    try {
        const data: IOrganizationInterface = await zendeskRequest(`/organizations.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching organization:', error);
        throw error;
    }
};