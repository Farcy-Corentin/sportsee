export class Calorie {
  private readonly _value: number

  public constructor(value: number) {
    this._value = value
  }

  public get value(): number {
    return this._value
  }

  public get unit(): string {
    return 'kCal'
  }
}
