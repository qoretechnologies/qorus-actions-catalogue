import { forEach } from 'lodash';
import { QorusAppsCatalogue } from '../ActionsCatalogue';

describe('Qorus Apps Catalogue tests', () => {
  it('Should register the apps', () => {
    QorusAppsCatalogue.registerApps();

    expect(QorusAppsCatalogue.apps).toHaveProperty('zendesk');

    forEach(QorusAppsCatalogue.apps, (app) => {
      expect(app.display_name).toBeDefined();
      expect(app.short_desc).toBeDefined();
      expect(app.desc).toBeDefined();

      forEach(app.actions, (action) => {
        expect(action.action).toBeDefined();
        expect(action.app).toBeDefined();
        expect(action.display_name).toBeDefined();
        expect(action.short_desc).toBeDefined();
        expect(action.desc).toBeDefined();

        if (action.options) {
          forEach(action.options, (option) => {
            expect(option.display_name).toBeDefined();
            expect(option.short_desc).toBeDefined();
            expect(option.desc).toBeDefined();
            expect(option.type).toBeDefined();
          });
        }

        if (action.response_type) {
          forEach(action.response_type, (responseType) => {
            expect(responseType.display_name).toBeDefined();
            expect(responseType.short_desc).toBeDefined();
            expect(responseType.desc).toBeDefined();
            expect(responseType.type).toBeDefined();
          });
        }
      });
    });
  });
});
