import { useUser } from '../hooks/useUser.ts'
import { useParams } from 'react-router-dom'
import { BarChartWrapper } from '../ui/BarChartWrapper.tsx'
import styled from '@emotion/styled'
import { LineChartWrapper } from '../ui/LineChartWrapper.tsx'
import { RadarChartWrapper } from '../ui/RadarChartWrapper.tsx'
import { RadialBarChartWrapper } from '../ui/RadialBarChartWrapper.tsx'
import { KeyDataCards } from '../ui/KeyDataCards.tsx'

const Container = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 68px 20px 86px 20px;

  @media (min-width: 1025px) {
    padding: 68px 107px 86px 90px;
  }
`

const Title = styled.h1`
  display: flex;
  font-size: 2rem;
  margin-bottom: 41px;
`

const UserName = styled.span`
  margin: 0 0 0 10px;
  color: red;
`

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 77px;
`

const AnalyticSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`

const ChartsWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 80%;
  }
`

const KeyDataWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 20%;
    margin-left: 31px;
  }
`

const AnalyticSectionDetails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 30px;
`
export const User = () => {
  const params = useParams()

  const id = parseInt(params.id as string)
  const { user, isLoading } = useUser(id)

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <Container>
      <Title>
        Bonjour <UserName>{user?.userInfos.fullName}</UserName>
      </Title>
      <Description>
        Félicitation ! vous avez explosé vos objectifs hier 👏
      </Description>
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
