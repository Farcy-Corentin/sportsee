import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { User } from './pages/User.tsx'
import { Global, css } from '@emotion/react'
import { Layout } from './ui/Layout.tsx'

function App(): JSX.Element {
  const styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      height: 100vh;
      width: 100%;
    }

    #root {
      width: 100%;
      height: 100%;
    }

    main {
      flex: 1;
      display: flex;
      align-items: stretch;
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
      element: <Layout />,
      children: [
        {
          path: '',
          element: <User />,
        },
      ],
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
