export { jsonHealth }

import { health } from '../modules'


async function jsonHealth() {
  return await health()
}
