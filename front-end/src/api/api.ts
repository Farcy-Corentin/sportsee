import axios from "axios"

export interface UserApiResponse {
  id: number,
  userInfos: {
    firstName: string,
    lastName: string,
    age: number
  },
  todayScore: number,
  keyData: {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  }
}

export const fetchUser = async (id: number): Promise<UserApiResponse | Error> => {
  try {
    const { data: response } = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data
  } catch (e) {
    return e as Error
  }
}
