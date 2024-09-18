import { createAction, OAuth2PropertyValue, Property } from 'core/framework';
import { Client } from '@notionhq/client';

import { notionAuth } from '../..';
import { notionCommon } from '../common';
import { IActionResponse } from '../../../../global/models/actions';

const createPageResponseType: IActionResponse = {
  object: {
    name: 'object',
    type: 'string',
    display_name: 'Object',
    short_desc: 'The type of object returned',
    desc: 'The type of object returned in this case it will always be page',
    example_value: 'page',
  },
  id: {
    name: 'id',
    type: 'string',
    display_name: 'ID',
    short_desc: 'The ID of the page',
    desc: 'The ID of the page',
    example_value: '12345678-1234-1234-1234-123456789012',
  },
  created_time: {
    name: 'created_time',
    type: 'string',
    display_name: 'Created Time',
    short_desc: 'The time the page was created',
    desc: 'The time the page was created',
    example_value: '2022-02-22T22:22:22.222Z',
  },
  last_edited_time: {
    name: 'last_edited_time',
    type: 'string',
    display_name: 'Last Edited Time',
    short_desc: 'The time the page was last edited',
    desc: 'The time the page was last edited',
    example_value: '2022-02-22T22:22:22.222Z',
  },
  parent: {
    name: 'parent',
    type: 'hash',
    display_name: 'Parent',
    short_desc: 'The parent of the page',
    desc: 'The parent of the page',
    example_value: {
      type: 'database_id',
      database_id: '12345678-1234-1234-1234-123456789012',
    },
  },
  archived: {
    name: 'archived',
    type: 'boolean',
    display_name: 'Archived',
    short_desc: 'Is the page archived',
    desc: 'Is the page archived',
    example_value: false,
  },
  url: {
    name: 'url',
    type: 'string',
    display_name: 'URL',
    short_desc: 'The URL of the page',
    desc: 'The URL of the page',
    example_value: 'https://www.notion.so/12345678-1234-1234-1234-123456789012',
  },
  properties: {
    name: 'properties',
    type: 'hash',
    display_name: 'Properties',
    short_desc: 'The properties of the page',
    desc: 'The properties of the page',
  },
};

export const createPage = createAction({
  auth: notionAuth,
  name: 'createPage',
  displayName: 'Create Page',
  description: 'Create a page under a parent page.',
  responseType: createPageResponseType,
  props: {
    pageId: notionCommon.page,
    title: Property.ShortText({
      displayName: 'Title',
      description: 'The title of the page.',
      required: false,
    }),
    content: Property.LongText({
      displayName: 'Content',
      description: 'The content of the page.',
      required: false,
    }),
  },

  async run(context) {
    const { pageId, title, content } = context.propsValue;

    const notion = new Client({
      auth: (context.auth as OAuth2PropertyValue).access_token,
      notionVersion: '2022-02-22',
    });

    const pageProperties: any = {
      title: {
        title: [
          {
            text: {
              content: title ?? '',
            },
          },
        ],
      },
    };

    const children: any[] = [];
    // Add content to page
    if (content)
      children.push({
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: content,
              },
            },
          ],
        },
      });

    const page = await notion.pages.create({
      parent: {
        page_id: pageId as string,
      },
      properties: pageProperties,
      children: children,
    });

    return page;
  },
});
