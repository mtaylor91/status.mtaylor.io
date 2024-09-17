import { Status } from './status';
import type { Health } from './status';


export function postgresqlHealth(): Health {
  return {
    status: Status.Healthy,
  }
}
