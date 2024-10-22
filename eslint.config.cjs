const tseslint = require("typescript-eslint");

module.exports = [
  {
    ...tseslint.configs.base,
    files: [`**/*.ts`],

    languageOptions: {
      ...tseslint.configs.base.languageOptions,
      parserOptions: {
        ...(tseslint.configs.base.languageOptions?.parserOptions ?? {}),
        project: "./tsconfig.json",
      },
    },

    rules: {
      "@typescript-eslint/no-unsafe-return": "error",
    },
  },
];
