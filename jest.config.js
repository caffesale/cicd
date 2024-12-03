export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__test__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
