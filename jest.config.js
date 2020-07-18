module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePattenrs: ["/node_moudles/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDit>/jest/setup.ts"],
};
