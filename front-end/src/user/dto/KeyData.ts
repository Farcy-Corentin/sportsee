export class KeyData {
  private _calorieCount: number
  private _proteinCount: number
  private _carbohydrateCount: number
  private _lipidCount: number

  public constructor(
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  ) {
    this._calorieCount = calorieCount
    this._proteinCount = proteinCount
    this._carbohydrateCount = carbohydrateCount
    this._lipidCount = lipidCount
  }

  get calorieCount(): number {
    return this._calorieCount
  }

  get proteinCount(): number {
    return this._proteinCount
  }

  get carbohydrateCount(): number {
    return this._carbohydrateCount
  }

  get lipidCount(): number {
    return this._lipidCount
  }
}
