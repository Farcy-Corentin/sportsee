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
  background: #fbfbfb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 32px;
  gap: 46px;
`

const IconWrapper = styled.div((props) => ({
  padding: '21px',
  background: props.color,
}))

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
      <div>
        <p>
          {keyData.value}
          {keyData.unit}
        </p>
        <p>{title}</p>
      </div>
    </KeyDataCardWrapper>
  )
}
