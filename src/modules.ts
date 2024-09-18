export { health }

import { httpHealth } from './http'
import { postgresqlHealth } from './postgresql'
import { Status } from './status'
import type { Health } from './status'


async function health(): Promise<Health> {
  const response = {
    status: Status.Healthy,
    components: {
      kubernetes: await httpHealth('https://kubernetes.default.svc.cluster.local/healthz'),
      events: await httpHealth('https://events.mtaylor.io/status'),
      iam: await httpHealth('https://iam.mtaylor.io/status'),
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
