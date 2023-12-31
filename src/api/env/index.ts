import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT_API: z.coerce.number().default(3333),
  PG_HOST: z.string(),
  PG_PORT: z.coerce.number().default(5432),
  PG_DATABASE: z.string(),
  PG_USER: z.string(),
  PG_PASS: z.string(),
  JWT_PRIVATE_KEY: z.string().default('123')
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('🛑 Invalid environment variable', _env.error.format())
  throw new Error('Invalid environment variable')
}

export const env = _env.data
