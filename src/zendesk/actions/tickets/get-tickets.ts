import { ITicketsInterface, ITicketType } from "zendesk/models/tickets";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction, IQoreTypeObject } from "global/models/qore";

interface IGetTickets {
    variant?: ITicketType,
    onlyDeleted?: boolean
}

// Defining a function to fetch tickets
export const getTickets = async ({ variant, onlyDeleted }: IGetTickets) => {
    try {
        const data: ITicketsInterface = await zendeskRequest(`/tickets${onlyDeleted ? '/deleted_tickets' : variant ? `/${variant}` : ''}.json`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
}


export default {
    app_function: getTickets,
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