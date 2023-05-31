export default class PerformanceEntity {
  private _kind: string
  private _value: number

  constructor(kind: string, value: number) {
    this._kind = kind
    this._value = value
  }

  get kind(): string {
    return this._kind
  }

  get value(): number {
    return this._value
  }
}
