import { Client } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction, Property } from '../../../../core/framework';

export const addCommentToDiscussion = createAction({
  auth: notionAuth,
  name: 'add_comment_to_discussion',
  displayName: 'Add Comment to Discussion',
  description: 'Create a comment in a discussion',
  props: {
    discussionId: Property.ShortText({
      displayName: 'Discussion ID',
      description: 'The ID of the discussion you want to add a comment to',
      required: true,
    }),
    text: Property.LongText({
      displayName: 'Text',
      description: 'The text of the comment you want to add',
      required: true,
    }),
  },
  async run(context) {
    const { discussionId, text } = context.propsValue;
    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });

    return await notion.comments.create({
      discussion_id: discussionId,
      rich_text: [{ text: { content: text } }],
    });
  },
});
