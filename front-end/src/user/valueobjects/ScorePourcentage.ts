export class ScorePercentage {
  private readonly _value: number

  constructor(value: number) {
    if (value < 0 || value > 1) {
      throw new Error('Score percentage must be between 0 and 1')
    }
    this._value = value
  }

  get value(): number {
    return this._value
  }

  get percentage(): number {
    return this._value * 100
  }
}
