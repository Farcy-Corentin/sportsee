export interface AverageSessionsApiResponse {
  data: {
    userId: number
    session: [
      {
        day: number
        sessionLength: number
      }
    ]
  }
}
