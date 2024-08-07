import { IQoreAppActionWithFunction, IQoreTypeObject } from 'global/models/qore';
import { zendeskRequest } from '../../client';

interface IGetOrganizationTickets {
  organizationId: number;
  count?: boolean;
}

// Defining a function to fetch organization tickets by id
const getOrganizationTickets = async ({ organizationId, count }: IGetOrganizationTickets) => {
  try {
    const data = await zendeskRequest(
      `/organizations/${organizationId}/tickets${count ? '/count' : ''}.json`,
      'GET'
    );
    return data;
  } catch (error) {
    console.error('Error fetching organization tickets:', error);
    throw error;
  }
};

export default {
  app_function: getOrganizationTickets,
  response_type: {
    tickets: {
      name: 'tickets',
      type: '*list',
    } as IQoreTypeObject,
    next_page: '*number',
    previous_page: '*number',
    count: '*number',
  },
} as Pick<IQoreAppActionWithFunction, 'app_function' | 'response_type'>;
