import {
  ActivityApiResponse,
  SessionApiResponse,
} from './ActivityApiResponseInterface.ts'
import ActivityEntity from './ActivityEntity.ts'

export default class ActivityFactory {
  public static createActivityFromApi(response: ActivityApiResponse) {
    if (response === undefined) {
      return undefined
    }

    const activities = response.data

    return activities.sessions.map((session: SessionApiResponse, index) => {
      return new ActivityEntity(
        typeof session.day === 'string' ? index + 1 : session.day,
        session.kilogram,
        session.calories,
        session.sessionLength
      )
    })
  }
}
