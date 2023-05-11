import { UserApiResponse } from '../user/UserApiResponseInterface.ts'

export type Routes = {
  '/user/:id': UserApiResponse
}

export type RoutesPath = keyof Routes
export type RouteResponse<R extends RoutesPath> = Routes[R]
