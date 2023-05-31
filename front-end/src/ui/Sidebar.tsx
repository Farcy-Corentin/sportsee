import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { MediationIcon } from './MediationIcon.tsx'
import { SwimmingIcon } from './SwimmingIcon.tsx'
import { CyclingIcon } from './CyclingIcon.tsx'
import { WorkoutIcon } from './WorkoutIcon.tsx'

const SidebarWrapper = styled.nav`
  width: 117px;
  background: #020203;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    background: #ffffff;
    height: 64px;
    width: 64px;
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 6px;
  }

  svg {
    height: auto;
    width: 100%;
  }

  p {
    margin-top: 164px;
    font-size: 12px;
    transform: rotate(-90deg);
    white-space: nowrap;
    color: white;
  }
`

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavLink to="/">
        <MediationIcon />
      </NavLink>
      <NavLink to="/">
        <SwimmingIcon />
      </NavLink>
      <NavLink to="/">
        <CyclingIcon />
      </NavLink>
      <NavLink to="/">
        <WorkoutIcon />
      </NavLink>
      <p>Copyright, SportSee 2020</p>
    </SidebarWrapper>
  )
}
