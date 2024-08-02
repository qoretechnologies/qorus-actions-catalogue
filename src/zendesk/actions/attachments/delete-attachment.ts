import { zendeskRequest } from "../../client";

// Defining a function to delete attachment
export const deleteAttachment = async ({ token }) => {
    try {
        const data = await zendeskRequest(`/uploads/${token}`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete attachment:', error);
        throw error;
    }
};