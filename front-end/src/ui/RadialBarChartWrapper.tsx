import { useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser.ts'
import { useEffect } from 'react'
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts'
import styled from '@emotion/styled'

const Circle = styled.div`
  background: white;
  border-radius: 100%;
  width: 140px;
  height: 140px;
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 20px;
  padding: 14px;
  background: #fbfbfb;
  border-radius: 5px;
  position: relative;
`

const LegendWrapper = styled.div`
  text-align: center;
`

const LegendScore = styled.p`
  font-size: 26px;
  font-weight: 700;
`

const LegendGoal = styled.p`
  color: #74798c;
  margin: 0 50px;
`
export const RadialBarChartWrapper = () => {
  const { id } = useParams()
  const { user, isLoading, error } = useUser(parseInt(id as string))

  useEffect(() => {
    if (user === undefined && error) {
      throw error
    }
  }, [user, error])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const percentage = user?.score.percentage

  if (typeof percentage !== 'number' || isNaN(percentage)) {
    return <p>Invalid data</p>
  }

  const data = [
    { name: 'center', value: 100, fill: 'white' },
    { name: 'pourcent', value: user?.score.percentage, fill: 'red' },
  ]

  const CustomLabel = () => {
    return (
      <LegendWrapper>
        <LegendScore>{user?.score.percentage}%</LegendScore>
        <LegendGoal>de votre objectif</LegendGoal>
      </LegendWrapper>
    )
  }

  return (
    <Container>
      <p>Score</p>
      <Circle />
      <ResponsiveContainer width="100%">
        <RadialBarChart
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0}
          outerRadius={140}
          barSize={10}
          startAngle={-270}
          endAngle={90}
        >
          <RadialBar
            background={{ fill: '#fbfbfb' }}
            dataKey="value"
            cornerRadius="50%"
          />
          <Legend verticalAlign="middle" align="center" content={CustomLabel} />
        </RadialBarChart>
      </ResponsiveContainer>
    </Container>
  )
}
