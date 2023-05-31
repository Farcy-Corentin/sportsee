import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosGetSaved = axios.get

/* eslint-disable @typescript-eslint/no-explicit-any */
axios.get = async function <T = any, R = AxiosResponse<T, any>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> {
  const { VITE_APP_URL } = import.meta.env
  const URI = `${VITE_APP_URL.replace(/\/+$/, '')}${url}`

  return axiosGetSaved(URI, config)
}

export default axios
