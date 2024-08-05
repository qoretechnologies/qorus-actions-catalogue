import { zendeskRequest } from "../../client";

interface IUserTicketsInterface {
    userId: number,
    type?: string,
    count?: boolean,
    showManyIds?: string
}

// Defining a function to fetch user tickets by id
export const getUserTickets = async ({
    userId,
    type,
    count,
    showManyIds,
}: IUserTicketsInterface) => {
    try {
        const uriEnd = showManyIds ? `/show_many?ids=${showManyIds}` : `${type ? `/${type}` : ''}${count ? '/count' : ''}`;
        const data = await zendeskRequest(`/users/${userId}/tickets${uriEnd}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching user tickets:', error);
        throw error;
    }
};