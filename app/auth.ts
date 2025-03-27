import { PrismaClient } from '@prisma/client'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { anonymous } from 'better-auth/plugins'

const prisma = new PrismaClient()

const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL
if (!BETTER_AUTH_URL) {
  throw new Error('BETTER_AUTH_URL is not set')
}

export const auth = betterAuth({
  appName: 'Bun issue v1.2.6',
  baseUrl: BETTER_AUTH_URL,
  database: prismaAdapter(prisma, { provider: 'sqlite' }),
  plugins: [anonymous()],
})
