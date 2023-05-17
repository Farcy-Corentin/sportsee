import PerformanceEntity from './PerformanceEntity.ts'
import { PerformancesApiResponse } from './PerformanceApiResponseInterface.ts'

export default class PerformanceFactory {
  public static createPerformanceFromApi(response: PerformancesApiResponse) {
    if (response === undefined) {
      return undefined
    }

    const performances = response.data

    return performances.data.map(({ kind, value }) => {
      return new PerformanceEntity(performances.kind[kind], value)
    })
  }
}
