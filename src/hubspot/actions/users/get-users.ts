import { hubspotRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to fetch users
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  results: {
    type: 'list',
    name: 'results',
    display_name: L.en.apps.hubspot.actions.users.results.displayName(),
    short_desc: L.en.apps.hubspot.actions.users.results.shortDesc(),
    desc: L.en.apps.hubspot.actions.users.results.longDesc(),
    example_value: [
      {
        id: '3609',
        properties: {},
        archived: false,
      },
    ],
  },
};

const getUsers = async () => {
  try {
    const data: TActionData<typeof options> = await hubspotRequest('/objects/users', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default {
  action: 'get_users',
  api_function: getUsers,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
