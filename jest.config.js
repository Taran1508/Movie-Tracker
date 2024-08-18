/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testEnvironment: 'jsdom', // Default test environment for frontend tests

  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.html$': 'jest-transform-stub',
  },
setupFiles: ['<rootDir>/jest.setup.js'],
  // Optionally configure specific projects for different environments
  projects: [
    {
      displayName: 'backend',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/backend/**/*.test.js'],
    },
    {
      displayName: 'frontend',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/frontend/**/*.test.js'],
    },
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  globalSetup: './__tests__/globalSetup.js', // Adjust the path as needed
  globalTeardown: './__tests__/globalTeardown.js', 
};

module.exports = config;
