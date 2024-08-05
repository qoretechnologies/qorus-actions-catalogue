import { zendeskRequest } from "../../client";

interface IDeleteAttachment {
    token: string
}

// Defining a function to delete attachment
export const deleteAttachment = async ({ token }: IDeleteAttachment) => {
    try {
        const data = await zendeskRequest(`/uploads/${token}`, 'DELETE');
        return data;
    } catch (error) {
        console.error('Error delete attachment:', error);
        throw error;
    }
};