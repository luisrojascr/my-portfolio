import 'dotenv/config';

import { defineConfig } from 'prisma/config';

/**
 * CLI / Migrate connection. If you use a pooler for `DATABASE_URL`, set
 * `DIRECT_URL` to a direct Postgres URL for migrations (replaces schema `directUrl`).
 */
const migrateUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
if (!migrateUrl) {
  throw new Error(
    'Missing DATABASE_URL (or DIRECT_URL for migrations). Load .env before running Prisma CLI.',
  );
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: migrateUrl,
  },
});
