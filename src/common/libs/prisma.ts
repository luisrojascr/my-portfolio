import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '@/generated/prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const adapter = new PrismaPg({ connectionString });

const createClient = () => new PrismaClient({ adapter });

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = createClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient | undefined;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = createClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
