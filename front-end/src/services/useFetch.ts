import axios from './AxiosService.ts'
import { useEffect, useState } from 'react'
import { RouteResponse, RoutesPath } from './routes.ts'
import { isProduction } from './envManager.ts'

export interface FetchResponse<ApiResponse> {
  data: ApiResponse | undefined
  error: Error | undefined
  isLoading: boolean
}

type ParamObject = { [p: string]: string | number }

export const useFetch = <R extends RoutesPath>(
  path: R,
  params: ParamObject,
  mock?: () => Promise<RouteResponse<R>>
): FetchResponse<RouteResponse<R>> => {
  const [data, setData] = useState<RouteResponse<R> | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  for (const [key, value] of Object.entries(params)) {
    path = path.replace(`:${key}`, value.toString()) as R
  }

  useEffect(() => {
    if (isProduction()) {
      axios
        .get(`${path}`)
        .then(({ data }: { data: RouteResponse<R> }) => setData(data))
        .catch((err: Error) => setError(err))
    } else if (mock) {
      mock()
        .then((data) => setData(data))
        .catch((err: Error) => setError(err))
    }
  }, [path])

  const isLoading = !data && !error

  return {
    data,
    error,
    isLoading,
  }
}
