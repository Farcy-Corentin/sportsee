import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { User } from "./pages/User.tsx";

function App(): JSX.Element {
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
  return <RouterProvider router={router} />
}

export default App
