import { RouteResponse } from '../services/routes.ts'
import mockAxiosError from './mockAxiosError.ts'

const userAverageSessionsMainData = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
]

export async function getAverageActivityByUser(
  id: number
): Promise<RouteResponse<'/user/:id/average-sessions'>> {
  const sessions = userAverageSessionsMainData.find(
    (session) => session.userId === id
  )

  if (sessions === undefined) {
    throw mockAxiosError('Unknown user', '404', '[mock] can not get user')
  }

  return { data: sessions }
}
