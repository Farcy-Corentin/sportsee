import { KeyDataPart } from '../user/KeyData/KeyDataPart.ts'
import { FireIcon } from './FireIcon.tsx'
import { ChickenIcon } from './ChickenIcon.tsx'
import { AppleIcon } from './AppleIcon.tsx'
import styled from '@emotion/styled'
import { HamburgerIcon } from './HamburgerIcon.tsx'

interface KeyDataCardProps {
  keyData: KeyDataPart
  title: string
  backgroundColor: string
  icon: string
}

const KeyDataCardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 124px;
  background: #fbfbfb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 16px;

  @media (min-width: 1025px) {
    padding: 32px;
  }
`

const IconWrapper = styled.div`
  padding: 21px;
  margin-right: 24px;
  border-radius: 6px;
  background: ${(props) => props.color};
`

const KeyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const KeyValue = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
  }
`

const KeyTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #74798c;
`

export const KeyDataCard = ({
  keyData,
  title,
  backgroundColor,
  icon,
}: KeyDataCardProps) => {
  let iconElement = null

  if (icon === 'calories') {
    iconElement = <FireIcon height="17" width="20" color="#FF0000" />
  }

  if (icon === 'protein') {
    iconElement = <ChickenIcon height="19" width="19" color="#4AB8FF" />
  }

  if (icon === 'carbohydrate') {
    iconElement = <AppleIcon height="18" width="20" color="#FDCC0C" />
  }

  if (icon === 'lipid') {
    iconElement = <HamburgerIcon height="19" width="20" color="#FD5181" />
  }

  return (
    <KeyDataCardWrapper>
      <IconWrapper color={backgroundColor}>{iconElement}</IconWrapper>
      <KeyWrapper>
        <KeyValue>
          {keyData.value}
          <span>{keyData.unit}</span>
        </KeyValue>
        <KeyTitle>{title}</KeyTitle>
      </KeyWrapper>
    </KeyDataCardWrapper>
  )
}
