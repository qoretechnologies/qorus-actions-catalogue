import { IResponseOrganizationInterface, IUpdateCreateOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";

interface ICreateOrganization {
    organizationCreate: IUpdateCreateOrganizationInterface
}

// Defining a function to create a Organization
export const createOrganization = async ({ organizationCreate }: ICreateOrganization) => {
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