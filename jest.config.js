const jestConfig = {
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0
    }
  }
};

module.exports = jestConfig;
