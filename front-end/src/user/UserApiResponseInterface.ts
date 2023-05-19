export interface UserApiResponse {
  data: {
    id: number
    userInfos: {
      firstName: string
      lastName: string
      age: number
    }
    todayScore: number
    keyData: {
      calorieCount: number
      proteinCount: number
      carbohydrateCount: number
      lipidCount: number
    }
  }
}
