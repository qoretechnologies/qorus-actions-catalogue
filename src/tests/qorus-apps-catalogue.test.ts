import { config } from 'dotenv';
import { QorusAppsCatalogue } from '../index';

config({ path: '.env.test' });

describe('QorusAppsCatalogue', () => {
  beforeAll(() => {
    QorusAppsCatalogue.registerApps();
  });

  it('should register all apps', () => {
    Object.entries(QorusAppsCatalogue.apps).forEach(([key, value]) => {
      console.log(key, value);
      expect(value).toBeDefined();
      expect(value.actions.length).toBeGreaterThan(0);
    });
  });
});
