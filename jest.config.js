module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/data/protocols/cache/**/*',
    '!<rootDir>/src/domain/models/**/*',
    '!<rootDir>/src/domain/usecases/**/*',
    '!<rootDir>/src/presentation/protocols/*',
    '!<rootDir>/src/validation/protocols/*',
    '!<rootDir>/src/assets/**/*',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts'
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['\\\\node_modules\\\\', '\\.pnp\\.[^\\\\]+$'],
  roots: ['<rootDir>/src'],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
};
