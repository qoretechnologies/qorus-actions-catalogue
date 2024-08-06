import { IResponseOrganizationInterface, IUpdateCreateOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

interface IUpdateOrganization {
    organizationId: number,
    organizationUpdate: IUpdateCreateOrganizationInterface
}

// Defining a function to update a organization
export const updateOrganization = async ({ organizationId, organizationUpdate }: IUpdateOrganization) => {
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

export default {
    app_function: updateOrganization,
    response_type: {
        created_at: "*string",
        id: "*number",
        name: "*string"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>