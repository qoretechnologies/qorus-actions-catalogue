import { Client, collectPaginatedAPI } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction } from 'core/framework';
import { IActionResponse } from 'global/models/actions';

const getUsersResponseType: IActionResponse = {
  results: {
    type: 'list',
    name: 'results',
    display_name: 'Results',
    short_desc: 'The list of users in the workspace',
    desc: 'The list of users in the workspace',
    example_value: [
      {
        object: 'user',
        id: '12345678-1234-1234-1234-123456789012',
        name: 'John Doe',
        type: 'person',
        person: {
          email: 'email@example.com',
        },
      },
      {
        object: 'user',
        id: '12345678-1234-1234-1234-123456789013',
        name: 'Jane Doe',
        type: 'bot',
        bot: {
          workspace_name: 'Workspace Name',
        },
      },
    ],
  },
};

export const getUsers = createAction({
  auth: notionAuth,
  name: 'get-users',
  displayName: 'Get Users',
  description: 'Returns a paginated list of user objects for a workspace',
  responseType: getUsersResponseType,
  props: {},
  async run(context) {
    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });
    const users = await collectPaginatedAPI(notion.users.list, {});

    return { results: users };
  },
});
