import { IQoreAppActionWithFunction } from "global/models/qore";
import { zendeskRequest } from "../../client";

interface IDeleteOrganization {
    organizationId: number
}

// Defining a function to delete organization
export const deleteOrganization = async ({ organizationId }: IDeleteOrganization) => {
    try {
        const data = await zendeskRequest(`/organizations/${organizationId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete organization:', error);
        throw error;
    }
};


export default {
    app_function: deleteOrganization,
    response_type: null
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>