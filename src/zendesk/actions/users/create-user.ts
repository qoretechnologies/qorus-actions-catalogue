import { IResponseUserInterface } from 'zendesk/models/users';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { L } from '../../../i18n/i18n-node';

// Defining a function to create a user

const options: IActionOptions = ZendeskOptions.users.userCreateUpdate;
export const response_type: IActionResponse = {
  custom_role_id: {
    type: 'number',
    name: 'custom_role_id',
    display_name: L.en.apps.Zendesk.actions.users.custom_role_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.custom_role_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.custom_role_id.longDesc(),
    example_value: 1234567890,
  },
  email: {
    type: 'string',
    name: 'email',
    display_name: L.en.apps.Zendesk.actions.users.email.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.email.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.email.longDesc(),
    example_value: 'john.doe@example.com',
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.Zendesk.actions.users.user_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.user_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.user_id.longDesc(),
    example_value: 1234567890,
  },
  name: {
    type: 'string',
    name: 'name',
    display_name: L.en.apps.Zendesk.actions.users.name.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.name.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.name.longDesc(),
    example_value: 'John Doe',
  },
  organization_id: {
    type: 'number',
    name: 'organization_id',
    display_name: L.en.apps.Zendesk.actions.users.organization_id.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.organization_id.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.organization_id.longDesc(),
    example_value: 1234567890,
  },
  role: {
    type: 'string',
    name: 'role',
    display_name: L.en.apps.Zendesk.actions.users.role.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.role.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.role.longDesc(),
    example_value: 'end-user',
  },
  role_type: {
    type: 'string',
    name: 'role_type',
    display_name: L.en.apps.Zendesk.actions.users.role_type.displayName(),
    short_desc: L.en.apps.Zendesk.actions.users.role_type.shortDesc(),
    desc: L.en.apps.Zendesk.actions.users.role_type.longDesc(),
    example_value: 'custom',
  },
};
const createUser = async (user: TActionData<typeof options>) => {
  try {
    const data: IResponseUserInterface = await zendeskRequest('/users', 'POST', user);

    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default {
  action: 'create_user',
  api_function: createUser,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
