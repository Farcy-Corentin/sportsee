import { UserApiResponse } from '../user/UserApiResponseInterface.ts'
import { ActivityApiResponse } from '../activity/ActivityApiResponseInterface.ts'
import { PerformanceApiResponse } from '../performance/PerformanceApiResponseInterface.ts'

export type Routes = {
  '/user/:id': UserApiResponse
  '/user/:id/activity': ActivityApiResponse
  '/user/:id/average-sessions': ActivityApiResponse
  '/user/:id/performance': PerformanceApiResponse
}

export type RoutesPath = keyof Routes
export type RouteResponse<R extends RoutesPath> = Routes[R]
