import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { config } from 'dotenv';

config({ path: '.env.test' });

describe('PiecesAppCatalogue', () => {
  beforeAll(() => {
    PiecesAppCatalogue.registerApps();
  });

  it('should register apps', () => {
    Object.entries(PiecesAppCatalogue.apps).forEach(([_key, value]) => {
      expect(value).toBeDefined();
      expect(value.actions.length).toBeGreaterThan(0);
    });
  });
});
