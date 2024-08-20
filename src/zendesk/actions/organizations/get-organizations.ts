import { IOrganizationInterface } from 'zendesk/models/organizations';
import { zendeskRequest } from '../../client';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse } from 'global/models/actions';

// Defining a function to fetch organization
const options: IActionOptions = null;
const response_type: IActionResponse = {
  count: {
    type: 'number',
    name: 'count',
    display_name: L.en.apps.zendesk.actions.organizations.count.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.count.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.count.longDesc(),
    example_value: 123,
  },
  organizations: {
    type: '*list',
    name: 'groups',
    display_name: L.en.apps.zendesk.actions.organizations.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.longDesc(),
    example_value: [
      {
        created_at: "2009-05-13T00:07:08Z",
        id: 211,
        is_public: true,
        name: "DJs",
        updated_at: "2011-07-22T00:11:12Z"
      },
    ],
  },
  next_page: {
    type: 'string',
    name: 'next_page',
    display_name: L.en.apps.zendesk.actions.organizations.next_page.displayName(),
    short_desc: L.en.apps.zendesk.actions.organizations.next_page.shortDesc(),
    desc: L.en.apps.zendesk.actions.organizations.next_page.longDesc(),
    example_value: "https://example.com/api/v2/groups.json?page=2",
  }
};
const getOrganizations = async () => {
  try {
    const data: IOrganizationInterface = await zendeskRequest(`/organizations.json`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching organization:', error);
    throw error;
  }
};

export default {
  action: 'get_organizations',
  app_function: getOrganizations,
  options,
  response_type,
}as TQorePartialActionWithFunction<typeof options, typeof response_type>;


