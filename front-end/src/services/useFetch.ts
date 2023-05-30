import axios from './AxiosService.ts'
import {useEffect, useState} from 'react'
import {RouteResponse, RoutesPath} from './routes.ts'
import {isProduction} from './envManager.ts'
import {AxiosError} from 'axios'
import {MockAxiosError} from "../data/mockAxiosError.ts"

export interface FetchResponse<ApiResponse> {
  data: ApiResponse | undefined
  error: MockAxiosError | AxiosError | undefined
  isLoading: boolean
}

type ParamObject = { [p: string]: string | number }

export const useFetch = <R extends RoutesPath>(
  path: R,
  params: ParamObject,
  mock?: () => Promise<RouteResponse<R>>
): FetchResponse<RouteResponse<R>> => {
  const [data, setData] = useState<RouteResponse<R> | undefined>(undefined)
  const [error, setError] = useState<MockAxiosError | AxiosError | undefined>(undefined)

  for (const [key, value] of Object.entries(params)) {
    path = path.replace(`:${key}`, value.toString()) as R
  }

  function setResponse(data?: RouteResponse<R>, error?: MockAxiosError | AxiosError) {
    setData(data)
    setError(error)
  }

  useEffect(() => {
    if (isProduction()) {
      axios
        .get(`${path}`)
        .then(({data}: { data: RouteResponse<R> }) => setResponse(data))
        .catch((error: AxiosError) => setResponse(undefined, error))
    } else if (mock) {
      mock()
        .then((data) => setResponse(data))
        .catch((error: MockAxiosError) => setResponse(undefined, error))
    }
  }, [path])

  const isLoading = !data && !error

  return {
    data,
    error,
    isLoading,
  }
}
