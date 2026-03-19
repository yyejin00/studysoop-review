import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'back/prisma/schema.prisma',
  migrations: {
    path: "back/prisma/migrations",
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
