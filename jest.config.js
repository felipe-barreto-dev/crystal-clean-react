export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
    "\\\\node_modules\\\\",
    "\\.pnp\\.[^\\\\]+$"
    ],
    roots: ["<rootDir>/src"],
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
    "^.+\\.tsx?$": "ts-jest"
    },
    should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};