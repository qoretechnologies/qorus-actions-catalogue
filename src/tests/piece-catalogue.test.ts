import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import { config } from 'dotenv';

config({ path: '.env.test' });
PiecesAppCatalogue.registerApps();

describe('PiecesAppCatalogue', () => {
  beforeAll(() => {
    PiecesAppCatalogue.registerApps();
  });

  it('should register apps', () => {
    Object.entries(PiecesAppCatalogue.apps).forEach(([key, value]) => {
      console.log(key, value.actions);
      expect(value).toBeDefined();
      expect(value.actions.length).toBeGreaterThan(0);
    });
  });
});
