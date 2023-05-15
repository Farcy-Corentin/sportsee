import { useUser } from '../hooks/useUser.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { BarChartWrapper } from '../ui/BarChartWrapper.tsx'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 80vw;
  height: 100%;
  padding: 40px 109px 20px 90px;
  margin: auto;
`
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
    <Container>
      <h1>{user?.fullName}</h1>
      <h2>Félicitation ! vous avez explosé vos objectifs hier 👏</h2>
      <div>
        <BarChartWrapper />
      </div>
    </Container>
  )
}
