export default class ActivityEntity {
  private _day: number
  private _kilogram: number | undefined
  private _calories: number | undefined
  private _sessionLength: number | undefined

  public constructor(
    day: number,
    kilogram?: number,
    calories?: number,
    sessionLength?: number
  ) {
    this._day = day
    this._kilogram = kilogram
    this._calories = calories
    this._sessionLength = sessionLength
  }

  get day(): number {
    return this._day
  }

  get kilogram(): number {
    return this._kilogram ?? 0
  }

  get calories(): number {
    return this._calories ?? 0
  }

  get sessionLength(): number {
    return this._sessionLength ?? 0
  }
}
