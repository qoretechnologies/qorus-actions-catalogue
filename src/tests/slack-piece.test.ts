import { TQoreAppActionFunctionContext } from '../global/models/qore';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { validateResponseProperties } from './helpers/validate-response-properties.helper';

describe('slackPieceTest', () => {
  let newMessageTimestamp: string = '';

  const actionContext = {
    conn_name: 'slack',
    conn_opts: {
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

  it('should find a Slack user by email', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'slack_find_user_by_email');
    const actionFunction = action?.api_function;

    const props = { email: process.env.SLACK_USER_EMAIL };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.user).toBeDefined();
        expect(result.user.profile.email).toBe(process.env.SLACK_USER_EMAIL);
        expect(result.user.id).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });
  it('should send a Slack message and receive a positive response', async () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'send_channel_message');
    const actionFunction = action?.api_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = { text: 'test message from Jest', channel: channelIds[0].value };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);

        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const props = { channel: channelIds[0].value };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.messages).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

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
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

    const props = {
      channelName: 'test-channel',
      isPrivate: false,
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        if (error.message !== 'An API error occurred: name_taken') {
          console.error('Error creating channel:', error);
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

    if (action.api_function) {
      try {
        const result = await action.api_function(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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

    if (action.api_function) {
      try {
        const result = await action.api_function(props, {}, actionContext);
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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

    if (action.api_function) {
      try {
        const result = await action.api_function(props, {}, actionContext);
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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

    if (action.api_function) {
      try {
        const result = await action.api_function(props, {}, actionContext);
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

    const props = { query: 'test' };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.matches).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

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
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
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
    const actionFunction = action?.api_function;

    const channelIds = await action.options.channel.get_allowed_values(actionContext);
    expect(channelIds).toBeDefined();
    expect(channelIds.length).toBeGreaterThan(0);

    const fileData = Buffer.from('This is a test file content', 'utf-8');

    const props = {
      file: {
        data: fileData,
        filename: 'example.txt',
      },
      channel: channelIds[0].value,
      title: 'Example Title',
      filename: 'example.txt',
    };

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.ok).toBeTruthy();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should update a user profile first name', async () => {
    const testName = 'test';
    const slackApp = PiecesAppCatalogue.apps['slack'];
    const findUserActionFunction = slackApp.actions.find(
      (action) => action.action === 'slack_find_user_by_email'
    )?.api_function;
    const action = slackApp.actions.find((action) => action.action === 'slack_update_profile');

    const actionFunction = action?.api_function;

    const findUserProps = { email: process.env.SLACK_USER_EMAIL };

    if (actionFunction) {
      try {
        const findUserResult = await findUserActionFunction(findUserProps, {}, actionContext);

        expect(findUserResult).toBeDefined();
        expect(findUserResult.user).toBeDefined();
        expect(findUserResult.user.id).toBeDefined();

        const props = { firstName: testName, lastName: testName, userId: findUserResult.user.id };
        const result = await actionFunction(props, {}, actionContext);

        expect(result).toBeDefined();
        expect(result.profile.first_name).toBe(testName);
        expect(result.profile.last_name).toBe(testName);
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });
});
