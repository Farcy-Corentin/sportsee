import { ActivityApiResponse } from './ActivityApiResponseInterface.ts'
import ActivityEntity from './ActivityEntity.ts'

export default class ActivityFactory {
  public static createActivityFromApi(response: ActivityApiResponse) {
    if (response === undefined) {
      return undefined
    }

    const activities = response.data

    return activities.sessions.map((activity: ActivityEntity, index) => {
      return new ActivityEntity(index + 1, activity.kilogram, activity.calories)
    })
  }
}
