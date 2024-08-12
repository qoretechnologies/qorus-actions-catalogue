import { TQoreAppActionFunctionOptions } from '../global/models/qore';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { config } from 'dotenv';

config({ path: '.env.test' });
PiecesAppCatalogue.registerApps();

describe('PiecesAppCatalogue', () => {
  beforeAll(() => {
    PiecesAppCatalogue.registerApps();
  });

  it('should register apps', () => {
    const slackApp = PiecesAppCatalogue.apps['slack'];
    expect(slackApp).toBeDefined();
    expect(slackApp.actions.length).toBeGreaterThan(0);
  });

  it('should send a Slack message and receive a positive response', async () => {
    const options: TQoreAppActionFunctionOptions = {
      props: { text: 'test message from Jest', channel: process.env.SLACK_CHANNEL_ID },
      auth: { access_token: process.env.SLACK_ACCESS_TOKEN },
    };

    const slackApp = PiecesAppCatalogue.apps['slack'];
    const actionFunction = slackApp.actions.find(
      (action) => action.action === 'send_channel_message'
    )?.app_function;

    if (actionFunction) {
      try {
        const result = await actionFunction(options);
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
});
