import KeyData from './KeyData.ts'
import { Protein } from './Protein.ts'
import { Calorie } from './Calorie.ts'
import { Carbohydrate } from './Carbohydrate.ts'
import { Lipid } from './Lipid.ts'
export class KeyDataFactory {
  public static createFromCounts(
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  ): KeyData {
    return new KeyData(
      new Calorie(calorieCount),
      new Protein(proteinCount),
      new Carbohydrate(carbohydrateCount),
      new Lipid(lipidCount)
    )
  }
}
