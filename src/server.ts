import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .get('/status.json', () => ({
      status: 'ok',
    }))
    .listen(3000)
