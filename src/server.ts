import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

import { htmlHealth } from './health/html'
import { jsonHealth } from './health/json'


const app = new Elysia()
  .use(html())
  .get('/', htmlHealth)
  .get('/health.json', jsonHealth)
  .listen(3000)
