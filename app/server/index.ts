import { Hono } from 'hono'
import { auth } from '../auth'

const app = new Hono()
  .basePath('/api')

  .on(['GET', 'POST'], '/auth/*', c => auth.handler(c.req.raw))

export default app
