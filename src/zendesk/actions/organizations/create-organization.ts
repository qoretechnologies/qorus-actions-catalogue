import { IResponseOrganizationInterface, IUpdateCreateOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

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

export default {
    app_function: createOrganization,
    response_type: {
      created_at: "*string",
      id: "*number",
      name: "*string"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>