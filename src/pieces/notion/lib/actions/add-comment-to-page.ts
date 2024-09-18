import { Client } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction, Property } from '../../../../core/framework';

export const addCommentToPage = createAction({
  auth: notionAuth,
  name: 'add_comment_to_page',
  displayName: 'Add Comment to Page',
  description: 'Create a comment in a page',
  props: {
    pageId: Property.ShortText({
      displayName: 'Page ID',
      description: 'The ID of the page you want to add a comment to',
      required: true,
    }),
    text: Property.LongText({
      displayName: 'Text',
      description: 'The text of the comment you want to add',
      required: true,
    }),
  },
  async run(context) {
    const { pageId, text } = context.propsValue;
    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });

    return await notion.comments.create({
      parent: {
        page_id: pageId,
        type: 'page_id',
      },
      rich_text: [{ text: { content: text } }],
    });
  },
});
