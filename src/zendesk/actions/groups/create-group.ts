import { IResponseGroupInterface, TGroupsOptions } from 'zendesk/models/groups';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { ZendeskOptions } from '../options';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse } from 'global/models/actions';

// Defining a function to create a group
const createGroup = async (group: TGroupsOptions) => {
  try {
    const data: IResponseGroupInterface = await zendeskRequest('/groups', 'POST', {
      group,
    });
    return data;
  } catch (error) {
    console.error('Error creating group:', error);
    throw error;
  }
};

export default {
  action: 'create_group',
  app_function: createGroup,
  options: ZendeskOptions.groups.groupCreateUpdate,
  response_type: {
    created_at: {
      type: '*string',
      name: 'created_at',
      display_name: L.en.apps.zendesk.actions.groups.created_at.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.created_at.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.created_at.longDesc(),
      example_value: '2023-05-01T10:30:00Z',
    },
    id: {
      type: '*number',
      name: 'id',
      display_name: L.en.apps.zendesk.actions.groups.id.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.id.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.id.longDesc(),
      example_value: 123,
    },
    is_public: {
      type: '*boolean',
      name: 'is_public',
      display_name: L.en.apps.zendesk.actions.groups.is_public.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.is_public.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.is_public.longDesc(),
      example_value: true,
    },
    name: {
      type: '*string',
      name: 'name',
      display_name: L.en.apps.zendesk.actions.groups.name.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.name.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.name.longDesc(),
      example_value: 'Support',
    },
    updated_at: {
      type: '*string',
      name: 'updated_at',
      display_name: L.en.apps.zendesk.actions.groups.updated_at.displayName(),
      short_desc: L.en.apps.zendesk.actions.groups.updated_at.shortDesc(),
      desc: L.en.apps.zendesk.actions.groups.updated_at.longDesc(),
      example_value: '2021-09-01T00:00:00Z',
    }
  },
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;

