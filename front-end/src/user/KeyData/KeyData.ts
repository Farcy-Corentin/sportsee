import { Calorie } from './Calorie.ts'
import { Protein } from './Protein.ts'
import { Carbohydrate } from './Carbohydrate.ts'
import { Lipid } from './Lipid.ts'

export default class KeyData {
  private readonly _calorie: Calorie
  private readonly _protein: Protein
  private readonly _carbohydrate: Carbohydrate
  private readonly _lipid: Lipid

  public constructor(
    calorie: Calorie,
    protein: Protein,
    carbohydrate: Carbohydrate,
    lipid: Lipid
  ) {
    this._calorie = calorie
    this._protein = protein
    this._carbohydrate = carbohydrate
    this._lipid = lipid
  }

  public get calorie(): Calorie {
    return this._calorie
  }

  public get protein(): Protein {
    return this._protein
  }

  public get carbohydrate(): Carbohydrate {
    return this._carbohydrate
  }

  public get lipid(): Lipid {
    return this._lipid
  }
}
