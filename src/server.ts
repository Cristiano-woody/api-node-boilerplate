import app from './api/app'
import { env } from './api/env'

app.listen(env.PORT_API, () => {
  console.log(`👾listening on port: ${env.PORT_API} 👾`)
})
