import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { User } from './pages/User.tsx'
import { Global, css } from '@emotion/react'

function App(): JSX.Element {
  const styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    }

    #root {
      height: 100%;
    }

    input {
      padding: 16px;
      border-radius: 10px;
    }

    button {
      padding: 16px;
      border-radius: 10px;
      background: transparent;
      transition: background-color 200ms 50ms ease-in-out,
        color 200ms 150ms ease-in-out;

      &:hover {
        background: black;
        color: white;
        cursor: pointer;
      }

      &:disabled {
        background: #e5e7eb;
        color: #9ca3af;
      }
    }

    ::placeholder {
      color: #9ca3af;
    }
  `
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'user/:id',
      element: <User />,
    },
  ])
  return (
    <>
      <Global styles={styles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
