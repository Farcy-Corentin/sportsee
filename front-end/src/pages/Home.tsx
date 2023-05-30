import type {FormEvent} from 'react'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from '@emotion/styled'
import {useUser} from '../hooks/useUser.ts'
import {DataErrorType} from "../data/mockAxiosError.ts"

const Container = styled.div`
  width: 80vw;
  height: 100%;
  padding: 40px 0 20px 100px;
  margin: auto;
`

const Form = styled('form')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }

  button {
    text-align: start;
  }
`

interface LoginProps {
  userId: number
  setErrorMessage: Dispatch<SetStateAction<string>>
}

function Login({ userId, setErrorMessage }: LoginProps) {
  const { user, error } = useUser(userId)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      const { data } = error.response as { data: DataErrorType }
      setErrorMessage(JSON.stringify(data).replace(/^"*|"*$/g, ''))
    }
    
    if (user) {
      navigate(`user/${userId}`)
    }
  }, [error, user])

  return <></>
}
export const Home = (): JSX.Element => {
  const [userId, setUserId] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <Container>
      <Form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label>
            Identifiant :
            <input
              type="text"
              name="id"
              placeholder={'Rentrer votre identifiant...'}
              onChange={(e) => {
                setIsSubmitted(false)
                if (e.target.value === '') {
                  setErrorMessage('')
                }
                setUserId(parseInt(e.target.value))
              }}
            />
          </label>
          {isSubmitted && (
            <Login
              userId={userId as number}
              setErrorMessage={setErrorMessage}
            />
          )}
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Soumettre</button>
        </div>
      </Form>
    </Container>
  )
}
