import { IQoreAppActionWithFunction, IQoreTypeObject } from "global/models/qore";
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
export default {
    app_function: getUserTickets,
    response_type: {
        tickets: {
            name: "tickets",
            type: '*list',
        } as IQoreTypeObject,
        next_page: "*number",
        previous_page: "*number",
        count: "*number"
    },
  } as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>