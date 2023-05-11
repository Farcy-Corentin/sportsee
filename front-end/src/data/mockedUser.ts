import { RouteResponse } from '../services/routes.ts'
import { AxiosError } from 'axios'

const userMainData = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl - mock',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia - mock',
      lastName: 'Ratorez',
      age: 34,
    },
    todayScore: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
]

export async function getUsersById(
  id: number
): Promise<RouteResponse<'/user/:id'>> {
  const user = userMainData.find((user) => user.id === id)
  if (user === undefined) {
    throw new AxiosError('Unknown user', '404')
  }
  return { data: user }
}
