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