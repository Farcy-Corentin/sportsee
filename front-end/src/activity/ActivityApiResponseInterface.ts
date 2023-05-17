export interface SessionApiResponse {
  day: number | string
  kilogram?: number
  calories?: number
  sessionLength?: number
}
export interface ActivityApiResponse {
  data: {
    userId: number
    sessions: SessionApiResponse[]
  }
}
