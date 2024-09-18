import { Client, collectPaginatedAPI } from '@notionhq/client';
import { notionAuth } from '../..';
import { createAction, Property } from '../../../../core/framework';

export const getComments = createAction({
  auth: notionAuth,
  name: 'get_comments',
  displayName: 'Get Comments',
  description: 'Retrieve a list of comments for a block',
  props: {
    blockId: Property.ShortText({
      displayName: 'Block ID',
      description: 'The ID of the block you want to retrieve comments for',
      required: true,
    }),
  },
  async run(context) {
    const { blockId } = context.propsValue;

    const notion = new Client({
      auth: context.auth.access_token,
      notionVersion: '2022-02-22',
    });

    return await collectPaginatedAPI(notion.blocks.children.list, { block_id: blockId });
  },
});
