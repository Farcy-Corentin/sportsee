import { useFetch } from '../services/useFetch.ts'
import { ActivityApiResponse } from '../activity/ActivityApiResponseInterface.ts'
import ActivityFactory from '../activity/ActivityFactory.ts'
import { getAverageActivityByUser } from '../data/mockedSession.ts'

export const useAverage = (id: number) => {
  const { data, error, isLoading } = useFetch(
    '/user/:id/average-sessions',
    { id },
    async (): Promise<ActivityApiResponse> => {
      return getAverageActivityByUser(id)
    }
  )

  const averageSessions = ActivityFactory.createActivityFromApi(
    data as ActivityApiResponse
  )

  return { averageSessions, error, isLoading }
}
