import {
  CartesianGrid,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useAverage } from '../hooks/useAverage.ts'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { FC, useEffect } from 'react'

interface CursorProps {
  points: {
    x: number
    y: number
  }[]
  width: number
  height: number
}

const Container = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 20px;
  background: #ff0000;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

const LineChartTooltip = styled.div`
  background-color: white;
  line-height: 180%;
  font-size: 10px;
  padding: 10px;
`

const Title = styled.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 150%;
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  z-index: 2;
`
export const LineChartWrapper = () => {
  const { id } = useParams()

  const { averageSessions, isLoading, error } = useAverage(
    parseInt(id as string)
  )

  useEffect(() => {
    if (averageSessions === undefined && error) {
      throw error
    }
  }, [averageSessions, error])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const data: any[] = []
  const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  averageSessions?.map((averageSession) => {
    data.push({
      day: day[averageSession.day - 1],
      sessionLength: averageSession.sessionLength,
    })
  })
  const CustomTooltip: FC<any> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <LineChartTooltip>
          <p>{`${payload[0].value} min`}</p>
        </LineChartTooltip>
      )
    }

    return null
  }

  const CustomCursor: FC<any> = ({ height, width, points }: CursorProps) => {
    const { x, y } = points[0]
    if (height && width && points) {
      return (
        <Rectangle
          fill="rgba(0, 0, 0, 0.1)"
          stroke="red"
          x={x}
          y={y}
          width={width}
          height={height}
        />
      )
    }

    return null
  }

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid stroke="red" strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={['dataMin', 'dataMax + 25']}
            hide={true}
          />
          <Tooltip
            cursor={<CustomCursor />}
            content={<CustomTooltip />}
            wrapperStyle={{ outlineStyle: 'none' }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: 'white',
              stroke: 'rgba(255,255,255, 0.3)',
              strokeWidth: 10,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
