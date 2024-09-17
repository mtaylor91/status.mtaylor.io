export { health }

import { postgresqlHealth } from './postgresql'
import { Status } from './status'
import type { Health } from './status'


async function health(): Promise<Health> {
  const response = {
    status: Status.Healthy,
    components: {
      postgresql: await postgresqlHealth(),
    }
  }

  const anyDegraded = Object.values(response.components)
    .some(component => component.status === Status.Degraded)
  const anyUnhealthy = Object.values(response.components)
    .some(component => component.status === Status.Unhealthy)

  if (anyUnhealthy) {
    response.status = Status.Unhealthy
  } else if (anyDegraded) {
    response.status = Status.Degraded
  }

  return response
}
