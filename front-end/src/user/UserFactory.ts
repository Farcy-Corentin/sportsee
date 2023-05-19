import UserEntity from './UserEntity.ts'
import { UserApiResponse } from './UserApiResponseInterface.ts'
import { UserInfos } from './dto/UserInfos.ts'
import { KeyData } from './dto/KeyData.ts'

export default class UserFactory {
  public static createUserFromApi(
    response: UserApiResponse | undefined
  ): UserEntity | undefined {
    if (response === undefined) {
      return undefined
    }
    const user = response.data

    return new UserEntity(
      user.id,
      new UserInfos(
        user.userInfos.firstName,
        user.userInfos.lastName,
        user.userInfos.age
      ),
      user.todayScore,
      new KeyData(
        user.keyData.calorieCount,
        user.keyData.proteinCount,
        user.keyData.carbohydrateCount,
        user.keyData.lipidCount
      )
    )
  }
}
