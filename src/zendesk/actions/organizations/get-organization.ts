import { IOrganizationInterface } from "src/zendesk/models/organizations";
import { zendeskRequest } from "../..";

// Defining a function to fetch organization by id
export const getOrganization = async (organizationId: number) => {
    try {
        const data: IOrganizationInterface = await zendeskRequest(`/organizations/${organizationId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching organization:', error);
        throw error;
    }
};