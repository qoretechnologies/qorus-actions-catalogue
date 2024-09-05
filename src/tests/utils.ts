import { forEach } from 'lodash';

export const responseHasCorrectStructure = (
  response: Record<string, unknown>,
  expectedStructure: Record<string, unknown>
): void => {
  if (!response) {
    expect(expectedStructure).toBeNull();

    return;
  }

  forEach(response, (_value, key) => {
    expect(expectedStructure).toHaveProperty(key);
  });
};
