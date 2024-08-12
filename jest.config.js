module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^global/(.*)$': '<rootDir>/src/global/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^i18n/(.*)$': '<rootDir>/src/i18n/$1',
  },
  roots: ['<rootDir>/src'],
};
