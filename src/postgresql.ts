import { Client } from 'pg'

import { Status } from './status'
import type { Health } from './status'


export async function postgresqlHealth(): Promise<Health> {
  try {
    const client = new Client()
    await client.connect()
    return {
      status: Status.Healthy,
    }
  } catch (error : unknown) {
    return {
      status: Status.Unhealthy,
      message: (error as Error).message,
    }
  }
}
