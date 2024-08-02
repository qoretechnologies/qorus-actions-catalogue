import { zendeskRequest } from "../../client";

// Defining a function to fetch user organizations by id
export const getUserOrganizations = async ({ userId }) => {
    try {
        const data = await zendeskRequest(`/users/${userId}/organizations.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user organizations:', error);
        throw error;
    }
};