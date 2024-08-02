import { IResponseOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";

// Defining a function to create a Organization
export const createOrganization = async ({ organizationCreate }) => {
    try {
        const data: IResponseOrganizationInterface = await zendeskRequest('/organizations', 'POST', {
            organization: organizationCreate
        });
        return data;
    } catch (error) {
        console.error('Error creating organization:', error);
        throw error;
    }
};