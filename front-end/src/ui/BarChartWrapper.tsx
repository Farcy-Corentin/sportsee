import { useActivity } from '../hooks/useActivity.ts'
import { useParams } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useEffect } from 'react'
import styled from '@emotion/styled'

const BarchartTooltip = styled.div`
  background: #e60000;
  color: white;
  line-height: 180%;
  font-size: 10px;
  padding: 10px;
`

const Container = styled.div`
  width: 80vw;
  height: 320px;
  padding: 40px 0 20px 100px;
  background: #fbfbfb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  margin: 0 auto 30px auto;
`

const Title = styled.p`
  margin-bottom: -20px;
`

export const BarChartWrapper = (): JSX.Element => {
  const params = useParams()
  const id = parseInt(params.id as string)

  const { activities, isLoading, error } = useActivity(id)

  useEffect(() => {
    if (activities === undefined && error) {
      throw error
    }
  }, [activities, error])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const data: any[] = []

  activities?.map(({ day, kilogram, calories }) => {
    data.push({
      day: day,
      kilogram: kilogram,
      calories: calories,
    })
  })

  const CustomTooltip: React.FC<any> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <BarchartTooltip>
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p>
        </BarchartTooltip>
      )
    }

    return null
  }

  return (
    <Container>
      <Title>Activité quotidienne</Title>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          width={500}
          height={300}
          margin={{
            top: 0,
            right: 15,
            left: 0,
            bottom: 15,
          }}
          data={data}
          barSize={9}
          barGap={9}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            tick={{ fontSize: 14, fontWeight: 500 }}
            stroke="#9B9EAC"
            dataKey="day"
            tickMargin={30}
            tickSize={0}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            tick={{ fontSize: 14, fontWeight: 500 }}
            stroke="#9B9EAC"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tickCount={3}
          />
          <YAxis yAxisId="calories" dataKey="calories" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => (
              <span className="barchart__legend">{value}</span>
            )}
            height={70}
            verticalAlign="top"
            align="right"
            iconSize={8}
            iconType={'circle'}
          />
          <Bar
            yAxisId="kg"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#e60000"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  )
}
