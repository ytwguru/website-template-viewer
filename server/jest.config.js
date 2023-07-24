module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: ['/**/*.(spec|test).(ts|js)'],
  testTimeout: 20000,
  transform: {
    "^.+\\.(ts|js)$": "ts-jest"
  }
};