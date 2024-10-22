const tseslint = require("typescript-eslint");

module.exports = [
  ...[...tseslint.configs.recommendedTypeChecked].map((config) => ({
    ...config,
    files: [`**/*.ts`],

    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...(config.languageOptions?.parserOptions ?? {}),
        projectService: true,
        // project: "./tsconfig.json",
      },
    },
  })),
];
