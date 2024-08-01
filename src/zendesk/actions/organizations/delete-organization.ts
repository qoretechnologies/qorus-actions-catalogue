import { zendeskRequest } from "../..";

// Defining a function to delete organization
export const deleteOrganization = async (organizationId: number) => {
    try {
        const data = await zendeskRequest(`/organizations/${organizationId}.json`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete organization:', error);
        throw error;
    }
};