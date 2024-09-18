import { Status } from './status'
import type { Health } from './status'


export async function httpHealth(url: string): Promise<Health> {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return {
        status: Status.Healthy,
      }
    } else {
      return {
        status: Status.Unhealthy,
        message: response.statusText,
      }
    }
  } catch (error : unknown) {
    return {
      status: Status.Unhealthy,
      message: (error as Error).message,
    }
  }
}
