import {
  IQoreAppActionWithFunction,
  IQoreAppWithActions,
  TQoreAppActionFunctionContext,
} from '../global/models/qore';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { validateResponseProperties } from './utils';

describe('notionPieceTest', () => {
  let notionApp: IQoreAppWithActions | null = null;
  let user: any | null = null;
  let page: any | null = null;
  let comment: any | null = null;
  let database: any | null = null;

  const actionContext = {
    conn_name: 'notion',
    conn_opts: {
      token: process.env.NOTION_ACCESS_TOKEN,
    },
    opts: {},
  } satisfies TQoreAppActionFunctionContext;

  beforeAll(() => {
    PiecesAppCatalogue.registerApps();
    notionApp = PiecesAppCatalogue.apps['Notion'];
  });

  it('should register Notion app', () => {
    expect(notionApp).not.toBeNull();
    expect(notionApp.actions).toBeDefined();
    expect(notionApp.actions.length).toBeGreaterThan(0);
  });

  it('should find users', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'get_users'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction) {
      try {
        const users = await actionFunction({}, {}, actionContext);
        expect(users).toBeDefined();
        expect(users.results).toBeDefined();
        expect(users.results.length).toBeGreaterThan(0);
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, users);
        }
        user = users.results[0];
      } catch (error) {
        console.error('Error getting users', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should get user', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'get_user'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction && user) {
      try {
        const result = await actionFunction({ userId: user.id }, {}, actionContext);
        expect(result).toBeDefined();
        expect(result.id).toEqual(user.id);
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error getting user', error);
        throw error;
      }
    } else {
      throw new Error('Action function not');
    }
  });

  it('should get token user', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'get_current_user'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction) {
      try {
        const result = await actionFunction({}, {}, actionContext);
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error getting token user', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should create a page', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'create_page'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction) {
      try {
        const pages = await action.options.pageId.get_allowed_values(actionContext);
        const result = await actionFunction(
          {
            pageId: pages[0].value,
            title: 'Test Page',
            content: 'This is a test page',
          },
          {},
          actionContext
        );
        page = result;
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error creating a page', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should add a comment to a page', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'add_comment_to_page'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction && page) {
      try {
        const result = await actionFunction(
          {
            pageId: page.id,
            text: 'This is a test comment',
          },
          {},
          actionContext
        );
        comment = result;
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error adding a comment to a page', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should add comment to discussion', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'add_comment_to_discussion'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction) {
      try {
        const result = await actionFunction(
          {
            discussionId: comment.discussion_id,
            text: 'This is a test comment',
          },
          {},
          actionContext
        );
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error adding a comment to a discussion', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should create a database', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'create_database'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction) {
      try {
        const result = await actionFunction(
          {
            pageId: page.id,
            title: 'Test Database',
            properties: {
              'Grocery item': {
                type: 'title',
                title: {},
              },
              Price: {
                type: 'number',
                number: {
                  format: 'dollar',
                },
              },
              'Last ordered': {
                type: 'date',
                date: {},
              },
            },
          },
          {},
          actionContext
        );
        expect(result).toBeDefined();
        database = result;
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error creating a database', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  // finish the test to add item to database
  it('should create an item in a database', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'create_database_item'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction && database) {
      try {
        const result = await actionFunction(
          {
            database_id: database.id,
            databaseFields: {
              'Grocery item': 'apple',
              Price: 1.0,
              'Last ordered': '2022-02-22',
            },
            content: 'This is a test item',
          },
          {},
          actionContext
        );
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error creating an item in a database', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });

  it('should remove the page', async () => {
    const action = notionApp.actions.find(
      (action) => action.action === 'remove_page'
    ) as IQoreAppActionWithFunction;
    const actionFunction = action?.api_function;

    if (actionFunction && page) {
      try {
        const result = await actionFunction(
          {
            pageId: page.id,
          },
          {},
          actionContext
        );
        expect(result).toBeDefined();
        const expectedResponseType = action.response_type;
        if (expectedResponseType) {
          validateResponseProperties(expectedResponseType, result);
        }
      } catch (error) {
        console.error('Error removing the page', error);
        throw error;
      }
    } else {
      throw new Error('Action function not found');
    }
  });
});
