import { ReqorePanel } from '@qoretechnologies/reqore';
import { StoryObj } from '@storybook/react';
import { StoryMeta } from 'global/models/storybook';
import { QorusAppsCatalogue } from '../index';
import { slack } from 'pieces/slack';

QorusAppsCatalogue.registerApps();

const meta = {
  component: () => <></>,
  title: 'Apps/Zendesk',
  render: () => {
    const action = QorusAppsCatalogue.apps['zendesk'].actions.find(
      (action) => action.action === 'get_user'
    );
    console.log(QorusAppsCatalogue.apps);
    console.log(slack);
    action?.app_function({ userId: 1 });

    return <ReqorePanel title='Zendesk'>Test</ReqorePanel>;
  },
} as StoryMeta<any>;

export default meta;

type StoryFSM = StoryObj<typeof meta>;

export const getUser: StoryFSM = {};
