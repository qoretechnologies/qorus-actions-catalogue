import { ITicketsCountInterface } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

// Defining a function to fetch tickets
export const getTicketsCount = async () => {
    try {
        const data: ITicketsCountInterface = await zendeskRequest(`/tickets/count.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};


export default {
    app_function: getTicketsCount,
    response_type: {
        count: "*number"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>