import { useFetch } from '../services/useFetch.ts'
import { PerformancesApiResponse } from '../performance/PerformanceApiResponseInterface.ts'
import { getPerformancesByUser } from '../data/mockedPerformance.ts'
import PerformanceFactory from '../performance/PerformanceFactory.ts'

export const usePerformance = (id: number) => {
  const { data, error, isLoading } = useFetch(
    '/user/:id/performance',
    { id },
    async (): Promise<PerformancesApiResponse> => {
      return getPerformancesByUser(id)
    }
  )

  const performances = PerformanceFactory.createPerformanceFromApi(
    data as PerformancesApiResponse
  )

  return { performances, error, isLoading }
}
