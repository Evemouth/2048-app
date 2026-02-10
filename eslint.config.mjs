// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import parserTypeScript from '@typescript-eslint/parser'

export default withNuxt(
  {
    plugins: {
      vue: pluginVue,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTypeScript,
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        sourceType: 'module',
      },
    },
  },
  {
    ignores: ['.nuxt/**', 'publish/**', 'node_modules/**', 'dist/**'],
  }
)
