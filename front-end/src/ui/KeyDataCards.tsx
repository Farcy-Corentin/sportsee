import KeyData from '../user/KeyData/KeyData.ts'
import { KeyDataCard } from './KeyDataCard.tsx'
import styled from '@emotion/styled'

const KeyDataCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`
export const KeyDataCards = ({ keyData }: { keyData: KeyData }) => {
  return (
    <KeyDataCardsWrapper>
      <KeyDataCard
        keyData={keyData.calorie}
        title="Calories"
        backgroundColor="rgb(255, 0, 0,0.1)"
        icon="calories"
      />
      <KeyDataCard
        keyData={keyData.protein}
        title="Proteines"
        backgroundColor="rgb(74, 184, 255,0.1)"
        icon="protein"
      />
      <KeyDataCard
        keyData={keyData.carbohydrate}
        title="Glucides"
        backgroundColor="rgb(249, 206, 35,0.1)"
        icon="carbohydrate"
      />
      <KeyDataCard
        keyData={keyData.lipid}
        title="Lipides"
        backgroundColor="rgb(253, 81, 129,0.1)"
        icon="lipid"
      />
    </KeyDataCardsWrapper>
  )
}
