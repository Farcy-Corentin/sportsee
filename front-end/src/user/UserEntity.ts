import UserInfos from './UserInfos.ts'
import KeyData from './KeyData/KeyData.ts'
import Score from './KeyData/Score.ts'

export default class UserEntity {
  private readonly _id: number
  private readonly _userInfos: UserInfos
  private readonly _score: Score
  private readonly _keyData: KeyData

  public constructor(
    id: number,
    userInfos: UserInfos,
    score: number,
    keyData: KeyData
  ) {
    this._id = id
    this._userInfos = userInfos
    this._score = this._score = new Score(score)
    this._keyData = keyData
  }

  get id(): number {
    return this._id
  }

  get userInfos(): UserInfos {
    return this._userInfos
  }

  get score(): Score {
    return this._score
  }

  get keyData(): KeyData {
    return this._keyData
  }
}
