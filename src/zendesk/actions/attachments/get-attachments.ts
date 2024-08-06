import { IQoreAppActionWithFunction, IQoreTypeObject } from "global/models/qore";
import { zendeskRequest } from "../../client";
import { IAttachmentsInterface } from "zendesk/models/attachments";

// Defining a function to fetch attachments
export const getAttachments = async () => {
    try {
        const data: IAttachmentsInterface = await zendeskRequest('/uploads.json', 'POST');
        return data;
    } catch (error) {
        console.error('Error fetching attachments:', error);
        throw error;
    }
};

export default {
    app_function: getAttachments,
    response_type: {
        attachments: {
            name: 'attachments',
            type: '*list',
        } as IQoreTypeObject,
        next_page: "*number",
        previous_page: "*number",
        count: "*number"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>