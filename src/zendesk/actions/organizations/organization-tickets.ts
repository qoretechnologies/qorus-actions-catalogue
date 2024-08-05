import { zendeskRequest } from "../../client";

interface IGetOrganizationTickets {
    organizationId: number,
    count?: boolean
}

// Defining a function to fetch organization tickets by id
export const getOrganizationTickets = async ({ organizationId, count }: IGetOrganizationTickets) => {
    try {
        const data = await zendeskRequest(`/organizations/${organizationId}/tickets${count ? '/count' : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching organization tickets:', error);
        throw error;
    }
};