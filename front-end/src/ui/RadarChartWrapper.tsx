import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { usePerformance } from '../hooks/UsePerformance.ts'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  height: 263px;
  background: #282d30;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

export const RadarChartWrapper = () => {
  const params = useParams()
  const id = parseInt(params.id as string)

  const { performances, isLoading, error } = usePerformance(id)

  useEffect(() => {
    if (performances === undefined && error) {
      throw error
    }
  }, [performances, error])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const data: any[] = []

  performances?.map(({ kind, value }) => {
    data.push({
      kind: kind,
      value: value,
    })
  })

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={'60%'} cx="50%" cy="50%" data={data}>
          <PolarGrid radialLines />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            dy={3}
            tickLine={false}
            tick={{
              fontSize: 12,
            }}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  )
}
