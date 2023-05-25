import { useUser } from '../hooks/useUser.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { BarChartWrapper } from '../ui/BarChartWrapper.tsx'
import styled from '@emotion/styled'
import { LineChartWrapper } from '../ui/LineChartWrapper.tsx'
import { RadarChartWrapper } from '../ui/RadarChartWrapper.tsx'
import { RadialBarChartWrapper } from '../ui/RadialBarChartWrapper.tsx'
import { KeyDataCards } from '../ui/KeyDataCards.tsx'

const Container = styled.div`
  width: 80vw;
  height: 100%;
  padding: 40px 109px 20px 90px;
  margin: auto;

  @media (min-width: 1024px) {
    width: 95vw;
  }
`

const AnalyticSection = styled.section`
  display: flex;
  gap: 31px;
  height: 100%;
  width: 100%;
`

const ChartsWrapper = styled.div`
  width: 80%;
`

const KeyDataWrapper = styled.div`
  width: 20%;
`

const AnalyticSectionDetails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  gap: 30px;
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
      <h1>{user?.userInfos.fullName}</h1>
      <h2>Félicitation ! vous avez explosé vos objectifs hier 👏</h2>
      <AnalyticSection>
        <ChartsWrapper>
          <BarChartWrapper />
          <AnalyticSectionDetails>
            <LineChartWrapper />
            <RadarChartWrapper />
            <RadialBarChartWrapper />
          </AnalyticSectionDetails>
        </ChartsWrapper>
        <KeyDataWrapper>
          {user?.keyData && <KeyDataCards keyData={user.keyData} />}
        </KeyDataWrapper>
      </AnalyticSection>
    </Container>
  )
}
