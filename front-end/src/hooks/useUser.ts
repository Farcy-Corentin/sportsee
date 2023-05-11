import { useFetch } from '../services/useFetch.ts'
import UserFactory from '../user/UserFactory.ts'
import { getUsersById } from '../data/mockedUser.ts'
import { UserApiResponse } from '../user/UserApiResponseInterface.ts'

export const useUser = (id: number) => {
  const { data, error, isLoading } = useFetch(
    '/user/:id',
    { id },
    async (): Promise<UserApiResponse> => {
      return getUsersById(id)
    }
  )
  const user = UserFactory.createUserFromApi(data)

  return { user, error, isLoading }
}
