import { createStartAPIHandler } from '@tanstack/react-start/api'
import server from './server'

export default createStartAPIHandler(({ request }) =>
  server.fetch(request, { NODE_ENV: process.env.NODE_ENV || 'development' })
)
