import { Link, useRouteError } from 'react-router-dom'
import styled from '@emotion/styled'
import { AxiosError } from 'axios'

interface ErrorPageProps {
  message: string
  status: string | number | undefined
}

export function RootErrorBoundary(): JSX.Element {
  const error = useRouteError() as AxiosError

  return (
    <ErrorPage
      status={
        error.response?.status ? error.response?.status : error.status ?? '500'
      }
      message={
        error.response?.data
          ? (error.response?.data as string)
          : error.message ?? "Oups! La page que vous demandez n'existe pas."
      }
    />
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  h1 {
    font-size: 5.625rem;
    color: #ff0000;
  }

  p {
    font-size: 1.5rem;
    color: #ff0000;
    margin-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: rgba(255, 0, 0, 0.5);
    padding: 16px 24px;
    &:hover {
      color: rgba(255, 0, 0, 0.7);
    }
  }
`
export const ErrorPage = ({ message, status }: ErrorPageProps) => {
  return (
    <Container>
      <h1>{status}</h1>
      <p>{message}</p>
      <Link to={`/`}>Retourner à l'accueil.</Link>
    </Container>
  )
}
