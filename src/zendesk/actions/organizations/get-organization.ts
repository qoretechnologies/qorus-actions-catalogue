import { IOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";

interface IDeleteOrganization {
    organizationId: number
}

// Defining a function to fetch organization by id
export const getOrganization = async ({ organizationId }: IDeleteOrganization) => {
    try {
        const data: IOrganizationInterface = await zendeskRequest(`/organizations/${organizationId}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching organization:', error);
        throw error;
    }
};