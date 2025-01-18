# Sample Webshop

- Node v.20.9.0
- React v.18
- Typescript v.5
- Vite v.6

## Running application locally

### First time installation

Add the variables needed to a `.env.local` file:

```
echo MAPBOX_ACCESS_TOKEN=[Found in Mapbox Account under Tokens] >> .env.local
```

Install all project dependencies:

```
npm install
```

Run the application:

```shell
npm run dev
```

## Redux Toolkit and RDK Query

The project uses Redux Tookit for global state management, with the RTK Query plugin for data fetching and caching.

## ESLint and Prettier

The project uses ESLint and Prettier for linting and formatting.

### Expanding ESLint config

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
