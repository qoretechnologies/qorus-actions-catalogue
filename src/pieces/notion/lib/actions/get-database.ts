import { Client } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction, Property } from '../../../../core/framework';

export const getDatabase = createAction({
  auth: notionAuth,
  name: 'get_database',
  displayName: 'Get Database',
  description: 'Retrieve a database object using its ID',
  props: {
    databaseId: Property.ShortText({
      displayName: 'Database ID',
      description: 'The ID of the database you want to retrieve',
      required: true,
    }),
  },
  async run(context) {
    const { databaseId } = context.propsValue;

    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });

    return await notion.databases.retrieve({ database_id: databaseId });
  },
});
