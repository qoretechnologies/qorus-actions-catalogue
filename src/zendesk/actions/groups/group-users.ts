import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';



// Defining a function to fetch group users by id
const options: IActionOptions = {
  groupId: ZendeskOptions.groups.id,
};
export const response_type: IActionResponse = {
  users: {
    type: '*list',
    name: 'users',
    display_name: L.en.apps.zendesk.actions.groups.users.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.users.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.users.longDesc(),
  },
  next_page:{
    type: '*string',
    name: 'next_page',
    display_name: L.en.apps.zendesk.actions.groups.next_page.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.next_page.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.next_page.longDesc(),
  },
  previoud_page:{
    type: '*string',
    name: 'previous_page',
    display_name: L.en.apps.zendesk.actions.groups.previoud_page.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.previoud_page.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.previoud_page.longDesc(),
  },
  count:{
    type: '*number',
    name: 'count',
    display_name: L.en.apps.zendesk.actions.groups.count.displayName(),
    short_desc: L.en.apps.zendesk.actions.groups.count.shortDesc(),
    desc: L.en.apps.zendesk.actions.groups.count.longDesc(),
  }

  
};
const getGroupUsers = async ({ groupId }:   TActionData<typeof options>) => {
  try {
    const data = await zendeskRequest(`/groups/${groupId}/users.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching group users:', error);
    throw error;
  }
};

export default {
  action: 'get_group_users',
  app_function: getGroupUsers,
  options,
  response_type,
}as TQorePartialActionWithFunction<typeof options, typeof response_type>;

