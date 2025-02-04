# Next.js Project with GraphQL and Authentication

This app is deployed and is available on this link [Shopping mart](https://shopping-mart-psi.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### GraphQL Integration

This project integrates GraphQL to handle API calls efficiently. It leverages Apollo Client for managing GraphQL queries and mutations, enabling seamless data fetching and state management across the app.

### Authentication

Authentication has been implemented for the app to secure sensitive operations. For testing purposes, use the following credentials:

- **Username:** [sunny@gmail.com](mailto:sunny@gmail.com)
- **Password:** 1234

> **Note:** Due to time constraints, the authentication is simplified, and only the above user is available in the database.

### Data Fetching

Instead of using `getServerSideProps`, the project dynamically fetches sensitive data like product prices directly from the server on each request. This ensures that the prices are always up-to-date and prevents stale or cached data from being served to users.

## Configuration

Make sure to update your `.env.local` file with the correct host URL to run the app properly, if you are running on localhost mostly it will be [http://localhost:3000](http://localhost:3000):

```env
HOST_URL=http://your-api-host-url
```

Replace `http://your-api-host-url` with the actual URL of your API server.

Also update the AUTH_SECRET. For more info visit [https://authjs.dev/getting-started/installation](https://authjs.dev/getting-started/installation)

## Deployment

This app is deployed and is available on this link [Shopping mart](https://shopping-mart-psi.vercel.app/)
