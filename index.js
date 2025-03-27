// @ts-check

/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/CHANGELOG*.md',
        '**/LICENSE*',
        '**/pnpm-lock.yaml'
      ],
      options: {
        requirePragma: true
      }
    }
  ]
}