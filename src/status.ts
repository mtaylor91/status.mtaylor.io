

export enum Status {
  Healthy = "Healthy",
  Degraded = "Degraded",
  Unhealthy = "Unhealthy",
}


export interface Health {
  status: Status;
  message?: string;
  components?: {[key: string]: Health};
}
