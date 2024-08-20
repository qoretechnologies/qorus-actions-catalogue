import { config } from 'dotenv';
import { TQoreAppActionFunctionContext } from '../global/models/qore';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';

config({ path: '.env.test' });
PiecesAppCatalogue.registerApps();

describe('slackPieceTest', () => {
  let newMessageTimestamp: string = '';

  const actionContext = {
    conn_name: 'slack',
    conn_options: {
      token: process.env.SLACK_ACCESS_TOKEN,
    },
    opts: {
      data: {
        authed_user: {
          access_token: process.env.SLACK_USER_ACCESS_TOKEN,
        },
      },
    },
  } satisfies TQoreAppActionFunctionContext;

  beforeAll(() => {
    PiecesAppCatalogue.registerApps();
  });

  it('should register slack', () => {
    const slackPiece = PiecesAppCatalogue.apps['slack'];
    expect(slackPiece).toBeDefined();
    expect(slackPiece.actions).toBeDefined();
    expect(slackPiece.actions.length).toBeGreaterThan(0);
  });

  it('should send a Slack message and receive a positive response', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'send_channel_message');
    const actionFunction = action?.app_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = { text: 'test message from Jest', channel: channelIds[0].value };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);

        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();

        newMessageTimestamp = result.ts;
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should get channel history', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'get_channel_history');
    const actionFunction = action?.app_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = { channel: channelIds[0].value };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.messages).toBeDefined();
      } catch (error) {
        console.error('Error getting channel history:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should add reaction to message', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find(
      (action) => action.action === 'slack_add_reaction_to_message'
    );
    const actionFunction = action?.app_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = {
      channel: channelIds[0].value,
      ts: newMessageTimestamp,
      reaction: 'thumbsup',
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
      } catch (error) {
        console.error('Error adding reaction:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should create a channel', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'slack_create_channel');
    const actionFunction = action?.app_function;

    const props = {
      channelName: 'test-channel',
      isPrivate: false,
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
      } catch (error) {
        console.error('Error creating channel:', error);
        if (error.message !== 'An API error occurred: name_taken') {
          throw error;
        }
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should request action direct message', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find(
      (action) => action.action === 'request_action_direct_message'
    );

    const userIds = await action.options.userId.get_allowed_values(actionContext);

    expect(userIds).toBeDefined();
    expect(userIds.length).toBeGreaterThan(0);

    const props = { userId: userIds[1].value, text: 'test message from Jest', actions: ['test'] };

    if (action.app_function) {
      try {
        const result = await action.app_function(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should request action in channel', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'request_approval_message');

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = {
      channel: channelIds[0].value,
      text: 'test message from Jest',
      actions: ['test'],
    };

    if (action.app_function) {
      try {
        const result = await action.app_function(props, {}, actionContext);
        expect(result).toBeDefined();
      } catch (error) {
        console.error('Error sending message:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should request approval direct message', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find(
      (action) => action.action === 'request_approval_direct_message'
    );

    const userIds = await action.options.userId.get_allowed_values(actionContext);

    expect(userIds).toBeDefined();
    expect(userIds.length).toBeGreaterThan(0);

    const props = { userId: userIds[1].value, text: 'test message from Jest' };

    if (action.app_function) {
      try {
        const result = await action.app_function(props, {}, actionContext);
        expect(result).toBeDefined();
      } catch (error) {
        console.error('Error asking approval:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should request approval in channel', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'request_approval_message');

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = {
      channel: channelIds[0].value,
      text: 'test message from Jest',
    };

    if (action.app_function) {
      try {
        const result = await action.app_function(props, {}, actionContext);
        expect(result).toBeDefined();
      } catch (error) {
        console.error('Error asking approval:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should search for messages', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'search_messages');
    const actionFunction = action?.app_function;

    const props = { query: 'test' };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.matches).toBeDefined();
      } catch (error) {
        console.error('Error searching messages:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should update a message', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'update_message');
    const actionFunction = action?.app_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = {
      channel: channelIds[0].value,
      ts: newMessageTimestamp,
      text: 'updated message from Jest',
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
      } catch (error) {
        console.error('Error updating message:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should upload a file', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'upload_file');
    const actionFunction = action?.app_function;

    const fileData = Buffer.from('This is a test file content', 'utf-8');

    const props = {
      file: {
        data: fileData,
        filename: 'example.txt',
      },
      title: 'Example Title',
      filename: 'example.txt',
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });
});
