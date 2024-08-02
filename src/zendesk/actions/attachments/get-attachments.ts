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