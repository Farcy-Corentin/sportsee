import { useFetch } from '../services/useFetch.ts'
import { ActivityApiResponse } from '../activity/ActivityApiResponseInterface.ts'
import { getActivitiesByUserId } from '../data/mockedActivity.ts'
import ActivityFactory from '../activity/ActivityFactory.ts'

export const useActivity = (id: number) => {
  const { data, error, isLoading } = useFetch(
    '/user/:id/activity',
    { id },
    async (): Promise<ActivityApiResponse> => {
      return getActivitiesByUserId(id)
    }
  )

  const activities = ActivityFactory.createActivityFromApi(
    data as ActivityApiResponse
  )

  return { activities, error, isLoading }
}
