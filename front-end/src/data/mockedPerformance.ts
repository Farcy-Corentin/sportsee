import { RouteResponse } from '../services/routes.ts'
import { AxiosError } from 'axios'

const userPerformancesMainData = [
  {
    userId: 12,
    kind: {
      '1': 'cardio',
      '2': 'energy',
      '3': 'endurance',
      '4': 'strength',
      '5': 'speed',
      '6': 'intensity',
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      '1': 'cardio',
      '2': 'energy',
      '3': 'endurance',
      '4': 'strength',
      '5': 'speed',
      '6': 'intensity',
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
]

export async function getPerformancesByUser(
  id: number
): Promise<RouteResponse<'/user/:id/performance'>> {
  const performance = userPerformancesMainData.find(
    (performance) => performance.userId === id
  )
  if (performance === undefined) {
    throw new AxiosError('Unknown performance for this user', '404')
  }

  return { data: performance }
}