import { IQoreAppActionOption } from 'global/models/qore';

export const ZendeskOptions = {
  userId: {
    display_name: 'User ID',
    short_desc: 'User ID',
    desc: 'User ID',
    type: 'number',
    required: true,
    example_value: 123,
  },
} satisfies Record<string, IQoreAppActionOption>;
