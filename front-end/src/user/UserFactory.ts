import UserEntity from "./UserEntity.ts"
import { UserApiResponse } from "../api/api.ts"

export default class UserFactory {
  public static createUserFromApi(user: UserApiResponse): UserEntity {
    return new UserEntity(
      user.id,
      user.userInfos.age,
      user.userInfos.firstName,
      user.userInfos.lastName,
    )
  }
}
