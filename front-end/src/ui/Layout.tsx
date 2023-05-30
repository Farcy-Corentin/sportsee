import { Navbar } from './Navbar.tsx'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar.tsx'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Layout = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </Container>
  )
}
