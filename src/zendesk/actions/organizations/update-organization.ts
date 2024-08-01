import { IResponseOrganizationInterface, IUpdateCreateOrganizationInterface } from "src/zendesk/models/organizations";
import { zendeskRequest } from "../..";

// Defining a function to update a organization
export const updateOrganization = async (organizationId: number, organizationUpdate: IUpdateCreateOrganizationInterface) => {
    try {
        const data: IResponseOrganizationInterface = await zendeskRequest(`/organizations/${organizationId}.json`, 'POST', {
            organization: organizationUpdate
        });
        return data;
    } catch (error) {
        console.error('Error updating organization:', error);
        throw error;
    }
};