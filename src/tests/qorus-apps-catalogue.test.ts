import { config } from 'dotenv';
import { QorusAppsCatalogue } from '..';

config({ path: '.env.test' });

describe('QorusAppsCatalogue', () => {
  beforeAll(() => {
    QorusAppsCatalogue.registerApps();
  });

  it('should register all apps', () => {
    Object.entries(QorusAppsCatalogue.apps).forEach(([_key, value]) => {
      expect(value).toBeDefined();
      expect(value.actions.length).toBeGreaterThan(0);
    });
  });
});
