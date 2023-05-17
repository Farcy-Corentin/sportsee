export interface PerformancesApiResponse {
  data: {
    userId: number
    kind: { [key: number]: string }
    data: { value: number; kind: number }[]
  }
}
