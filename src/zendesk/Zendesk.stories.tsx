import { StoryObj } from '@storybook/react';
import { StoryMeta } from 'global/models/storybook';

const meta = {
  component: () => <></>,
  title: 'Apps/Zendesk',
} as StoryMeta<any>;

export default meta;

type StoryFSM = StoryObj<typeof meta>;

export const Basic: StoryFSM = {};
