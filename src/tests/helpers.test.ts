import { IQoreTypeObject } from 'global/models/qore';
import { fixActionOptions, mapActionsToApp } from '../global/helpers';
import { IActionOptions } from '../global/models/actions';
import * as zendeskActions from '../zendesk/actions';

describe('Helpers tests', () => {
  it('Properly maps actions to a given app', () => {
    const actions = mapActionsToApp('Zendesk', zendeskActions, 'en');
    const createTicket = actions.find((action) => action.action === 'create_ticket');

    expect(actions).toHaveLength(23);
    expect(createTicket).toBeDefined();
    expect(
      (createTicket.options.ticket.type as Record<string, IQoreTypeObject>).comment.display_name
    ).toBe('Comment');

    expect(
      (createTicket.response_type.ticket.type as Record<string, IQoreTypeObject>).created_at
        .display_name
    ).toBe('Created At');
  });

  it('Should receive fully incomplete action options and return fixed options', () => {
    const incompleteOptions = {
      option1: {
        type: 'string',
        example_value: 'example',
        required: true,
      },
    } satisfies IActionOptions;

    const fixedOptions = fixActionOptions(incompleteOptions, '_testing', 'en', 'test');

    expect(fixedOptions.option1.display_name).toBe('Option 1');
    expect(fixedOptions.option1.short_desc).toBe('Option 1 Short Description');
    expect(fixedOptions.option1.desc).toBe('Option 1 Long Description');
  });

  it('Should receive partially incomplete action options and return fixed options', () => {
    const incompleteOptions = {
      option1: {
        type: 'string',
        example_value: 'example',
        required: true,
        short_desc: 'This is my short description and it should not change',
      },
    } satisfies IActionOptions;

    const fixedOptions = fixActionOptions(incompleteOptions, '_testing', 'en', 'test');

    expect(fixedOptions.option1.display_name).toBe('Option 1');
    expect(fixedOptions.option1.short_desc).toBe(
      'This is my short description and it should not change'
    );
    expect(fixedOptions.option1.desc).toBe('Option 1 Long Description');
  });

  it('Should receive partially incomplete deep action options and return fixed deep options', () => {
    const incompleteOptions = {
      option1: {
        type: 'string',
        example_value: 'example',
        required: true,
        short_desc: 'This is my short description and it should not change',
      },
      option2: {
        example_value: {
          sub_option1: 'example',
        },
        type: {
          sub_option1: {
            name: 'sub_option1',
            type: {
              sub_sub_option1: {
                name: 'sub_sub_option1',
                display_name: 'This option is so deep',
                type: 'string',
                example_value: 'example',
                required: true,
                short_desc: 'Very very deep',
              },
            },
            example_value: 'example',
            required: true,
            desc: 'A sub description, if you like',
          },
        },
      },
    } as const;

    const fixedOptions = fixActionOptions(incompleteOptions, '_testing', 'en', 'test');

    expect(fixedOptions.option2.display_name).toBe('Second Option');

    expect(
      (fixedOptions.option2.type as Record<string, IQoreTypeObject>).sub_option1.display_name
    ).toBe('Sub Option 1 of Option 2');
    expect((fixedOptions.option2.type as Record<string, IQoreTypeObject>).sub_option1.desc).toBe(
      'A sub description, if you like'
    );

    expect(
      (
        (fixedOptions.option2.type as Record<string, IQoreTypeObject>).sub_option1.type as Record<
          string,
          IQoreTypeObject
        >
      ).sub_sub_option1.display_name
    ).toBe('This option is so deep');
    expect(
      (
        (fixedOptions.option2.type as Record<string, IQoreTypeObject>).sub_option1.type as Record<
          string,
          IQoreTypeObject
        >
      ).sub_sub_option1.desc
    ).toBe('Generated description');
  });
});
