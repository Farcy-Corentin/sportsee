import { RouteResponse } from '../services/routes.ts'
import { AxiosError } from 'axios'

const userActivitiesMainData = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240,
      },
      {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220,
      },
      {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280,
      },
      {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290,
      },
      {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160,
      },
      {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162,
      },
      {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 70,
        calories: 240,
      },
      {
        day: '2020-07-02',
        kilogram: 69,
        calories: 220,
      },
      {
        day: '2020-07-03',
        kilogram: 70,
        calories: 280,
      },
      {
        day: '2020-07-04',
        kilogram: 70,
        calories: 500,
      },
      {
        day: '2020-07-05',
        kilogram: 69,
        calories: 160,
      },
      {
        day: '2020-07-06',
        kilogram: 69,
        calories: 162,
      },
      {
        day: '2020-07-07',
        kilogram: 69,
        calories: 390,
      },
    ],
  },
]

export async function getActivitiesByUserId(
  id: number
): Promise<RouteResponse<'/user/:id/activity'>> {
  const activitiesByUser = userActivitiesMainData.find(
    (activities) => activities.userId === id
  )
  if (activitiesByUser === undefined) {
    throw new AxiosError('Unknown activities for this user', '404')
  }
  return { data: activitiesByUser }
}
