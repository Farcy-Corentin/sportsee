import UserEntity from "./UserEntity.ts"
import { UserApiResponse } from "./UserApiResponseInterface.ts"

export default class UserFactory {
  public static createUserFromApi(response: UserApiResponse | undefined): UserEntity | undefined {
    if (response === undefined) {
      return undefined
    }
    const user = response.data
    return new UserEntity(
      user.id,
      user.userInfos.age,
      user.userInfos.firstName,
      user.userInfos.lastName
    )
  }
}
