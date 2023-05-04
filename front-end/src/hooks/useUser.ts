import { fetchUser } from "../api/api.ts"
import UserEntity from "../user/UserEntity.ts"
import { useState } from "react"
import UserFactory from "../user/UserFactory.ts"

export const useUser = (id: number) => {
  const [user, setUser] = useState<UserEntity | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)
  
  fetchUser(id).then((response) => {
    return response instanceof Error
      ? setError(response)
      : setUser(UserFactory.createUserFromApi(response))
  })
  
  const isLoading = !user && !error

  return {
    user,
    isLoading,
    error,
  }
}
