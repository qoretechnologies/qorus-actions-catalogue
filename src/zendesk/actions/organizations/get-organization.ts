import { IOrganizationInterface } from "zendesk/models/organizations";
import { zendeskRequest } from "../../client";
import { IQoreAppActionWithFunction } from "global/models/qore";

interface IDeleteOrganization {
  organizationId: number
}

// Defining a function to fetch organization by id
export const getOrganization = async ({ organizationId }: IDeleteOrganization) => {
  try {
    const data: IOrganizationInterface = await zendeskRequest(`/organizations/${organizationId}.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching organization:', error);
    throw error;
  }
};

export default {
  app_function: getOrganization,
  response_type: {
    created_at: "*string",
    id: "*number",
    name: "*string"
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>