import { useUser } from '../hooks/useUser.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const User = () => {
  const params = useParams()
  const navigate = useNavigate()

  const id = parseInt(params.id as string)
  const { user, isLoading, error } = useUser(id)

  useEffect(() => {
    if (user === undefined && error) {
      navigate('/', { state: { error: error } })
    }
  }, [user, error, navigate])

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <>
      <p>{user?.fullName}</p>
    </>
  )
}
