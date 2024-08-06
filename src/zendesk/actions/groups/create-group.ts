import { IResponseGroupInterface, IUpdateCreateGroupInterface } from "zendesk/models/groups";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

interface ICreateGroup {
    groupCreate: IUpdateCreateGroupInterface
}

// Defining a function to create a group
export const createGroup = async ({ groupCreate }: ICreateGroup) => {
    try {
        const data: IResponseGroupInterface = await zendeskRequest('/groups', 'POST', {
            group: groupCreate
        });
        return data;
    } catch (error) {
        console.error('Error creating group:', error);
        throw error;
    }
};
export default {
    app_function: createGroup,
    response_type: {
      created_at: "*string",
      id: "*number",
      name: "*string"
    },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>