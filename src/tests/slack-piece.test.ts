import { config } from 'dotenv';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { TQoreAppActionFunctionContext } from '../global/models/qore';

config({ path: '.env.test' });
PiecesAppCatalogue.registerApps();

describe('slackPieceTest', () => {
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
    const props = { text: 'test message from Jest', channel: process.env.SLACK_CHANNEL_ID };
    const actionContext = {
      conn_name: 'slack',
      conn_options: {
        token: process.env.SLACK_ACCESS_TOKEN,
      },
      opts: {},
    } satisfies TQoreAppActionFunctionContext;

    const slackApp = PiecesAppCatalogue.apps['slack'];
    const actionFunction = slackApp.actions.find(
      (action) => action.action === 'send_channel_message'
    )?.app_function;

    if (actionFunction) {
      try {
        const result = await actionFunction(props, {}, actionContext);
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

  it('should get channel history', async () => {
    const props = { channel: process.env.SLACK_CHANNEL_ID };
    const actionContext = {
      conn_name: 'slack',
      conn_options: {
        token: process.env.SLACK_ACCESS_TOKEN,
      },
      opts: {},
    } satisfies TQoreAppActionFunctionContext;

    const slackApp = PiecesAppCatalogue.apps['slack'];
    const action = slackApp.actions.find((action) => action.action === 'get_channel_history');
    const actionFunction = action?.app_function;

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
});
