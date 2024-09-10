module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  testTimeout: 60000,
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/tests/**/*.(spec|test).ts'],
};
