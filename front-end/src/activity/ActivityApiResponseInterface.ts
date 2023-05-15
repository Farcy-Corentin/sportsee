import ActivityEntity from './ActivityEntity.ts'

export interface ActivityApiResponse {
  data: {
    userId: number
    sessions: ActivityEntity[]
  }
}
