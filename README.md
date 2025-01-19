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

## Mantine UI

Styling is handled with components from the Mantine UI library, with custom styles from CSS modules where needed.
