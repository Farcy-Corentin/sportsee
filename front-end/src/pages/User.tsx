import { useUser } from "../hooks/useUser.ts"
import { useNavigate, useParams } from "react-router-dom"

export const User = () => {
  const params = useParams()
  const navigate = useNavigate()

  const id = parseInt(params.id as string)
  const { user, isLoading } = useUser(id)
  
  if (isLoading) {
    return <p>Loading ...</p>
  }
  
  if (user === undefined) {
    return navigate('/')
  }

  return (
    <>
      <p>{user.fullName}</p>
    </>
  )
}
