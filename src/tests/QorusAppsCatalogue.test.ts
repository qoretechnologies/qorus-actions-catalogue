import { readFileSync } from 'fs';
import { forEach } from 'lodash';
import { join } from 'node:path';
import { QorusAppsCatalogue } from '../ActionsCatalogue';

describe('Qorus Apps Catalogue tests', () => {
  it('Should register the apps', () => {
    QorusAppsCatalogue.registerApps();

    expect(QorusAppsCatalogue.apps).toHaveProperty('zendesk');

    forEach(QorusAppsCatalogue.apps, (app) => {
      expect(app.display_name).not.toBeFalsy();
      expect(app.short_desc).not.toBeFalsy();
      expect(app.desc).not.toBeFalsy();

      if (app.swagger) {
        // Make sure the swagger file exists
        expect(readFileSync(join(__dirname, '..', app.swagger))).not.toBeFalsy();
      }

      forEach(app.actions, (action) => {
        expect(action.action).not.toBeFalsy();
        expect(action.app).not.toBeFalsy();
        expect(action.display_name).not.toBeFalsy();
        expect(action.short_desc).not.toBeFalsy();
        expect(action.desc).not.toBeFalsy();

        if ('options' in action) {
          forEach(action.options, (option) => {
            expect(option.display_name).not.toBeFalsy();
            expect(option.short_desc).not.toBeFalsy();
            expect(option.desc).not.toBeFalsy();
            expect(option.type).not.toBeFalsy();
          });
        }

        if ('response_type' in action) {
          forEach(action.response_type, (responseType) => {
            expect(responseType.display_name).not.toBeFalsy();
            expect(responseType.short_desc).not.toBeFalsy();
            expect(responseType.desc).not.toBeFalsy();
            expect(responseType.type).not.toBeFalsy();
          });
        }

        if ('swagger_path' in action) {
          expect(action.swagger_path.includes('undefined')).not.toBeTruthy();
        }
      });
    });
  });
});
