import { IResponseOrganizationInterface, IUpdateCreateOrganizationInterface } from "src/zendesk/models/organizations";
import { zendeskRequest } from "../..";

// Defining a function to create a Organization
export const createOrganization = async (organizationCreate: IUpdateCreateOrganizationInterface) => {
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