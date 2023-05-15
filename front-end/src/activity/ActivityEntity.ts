export default class ActivityEntity {
  private _day: number
  private _kilogram: number
  private _calories: number

  public constructor(day: number, kilogram: number, calories: number) {
    this._day = day
    this._kilogram = kilogram
    this._calories = calories
  }

  get day(): number {
    return this._day
  }

  get kilogram(): number {
    return this._kilogram
  }

  get calories(): number {
    return this._calories
  }
}
