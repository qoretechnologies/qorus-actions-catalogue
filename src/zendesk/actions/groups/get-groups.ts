import { IGroupsInterface } from 'zendesk/models/groups';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse } from 'global/models/actions';

// Defining a function to fetch groups
const options: IActionOptions = null;
export const response_type: IActionResponse = {
  groups: {
    type: 'list',
    name: 'groups',
    display_name: L.en.apps.Zendesk.actions.groups.groups.displayName(),
    short_desc: L.en.apps.Zendesk.actions.groups.groups.shortDesc(),
    desc: L.en.apps.Zendesk.actions.groups.groups.longDesc(),
    example_value: [
      {
        created_at: '2009-05-13T00:07:08Z',
        id: 211,
        is_public: true,
        name: 'DJs',
        updated_at: '2011-07-22T00:11:12Z',
      },
      {
        created_at: '2009-08-26T00:07:08Z',
        id: 122,
        is_public: true,
        name: 'MCs',
        updated_at: '2010-05-13T00:07:08Z',
      },
    ],
  },
};

const getGroups = async () => {
  try {
    const data: IGroupsInterface = await zendeskRequest('/groups.json', 'GET');

    return data;
  } catch (error) {
    console.error('Error fetching groups:', error);
    throw error;
  }
};

export default {
  action: 'get_groups',
  api_function: getGroups,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
