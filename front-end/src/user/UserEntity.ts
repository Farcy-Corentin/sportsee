import { UserInfos } from './dto/UserInfos.ts'
import { KeyData } from './dto/KeyData.ts'
import { ScorePercentage } from './valueobjects/ScorePourcentage.ts'

export default class UserEntity {
  private _id: number
  private _userInfos: UserInfos
  private _score: ScorePercentage
  private _keyData: KeyData

  public constructor(
    id: number,
    userInfos: UserInfos,
    score: number,
    keyData: KeyData
  ) {
    this._id = id
    this._userInfos = userInfos
    this._score = this._score = new ScorePercentage(score)
    this._keyData = keyData
  }

  get id(): number {
    return this._id
  }

  get userInfos(): UserInfos {
    return this._userInfos
  }

  get score(): ScorePercentage {
    return this._score
  }

  get keyData(): KeyData {
    return this._keyData
  }
}
