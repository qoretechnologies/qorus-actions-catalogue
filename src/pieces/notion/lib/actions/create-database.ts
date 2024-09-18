import { Client } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction, Property } from '../../../../core/framework';
import { notionCommon } from '../common';

export const createDatabase = createAction({
  name: 'create_database',
  displayName: 'Create Database',
  description: 'Create a new database',
  auth: notionAuth,
  props: {
    databaseId: { ...notionCommon.database_id, required: false },
    pageId: { ...notionCommon.page, required: false },
    title: Property.ShortText({
      displayName: 'Title',
      description: 'The title of the database',
      required: true,
    }),
    properties: Property.Json({
      displayName: 'Properties',
      description: 'The properties of the database',
      required: true,
      defaultValue: {
        'Grocery item': {
          type: 'title',
          title: {},
        },
        Price: {
          type: 'number',
          number: {
            format: 'dollar',
          },
        },
        'Last ordered': {
          type: 'date',
          date: {},
        },
      },
    }),
  },
  async run(context) {
    const { title, properties } = context.propsValue;

    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });

    const parent = context.propsValue.databaseId
      ? { database_id: context.propsValue.databaseId }
      : { page_id: context.propsValue.pageId };

    return await notion.databases.create({
      parent,
      title: [
        {
          type: 'text',
          text: {
            content: title,
          },
        },
      ],
      properties: properties as Record<string, any>,
    });
  },
});
