import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT_API: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('🛑 Invalid environment variable', _env.error.format())
  throw new Error('Invalid environment variable')
}

export const env = _env.data
