import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

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

export const Home = (): JSX.Element => {
  const [userId, setUserId] = useState<number | null>(null)
  const [messageError, setMessageError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state !== null) {
      const { error } = location.state

      setMessageError(error.message)
    }
  }, [location.state])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/user/${userId}`)
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
              onChange={(e) => setUserId(parseInt(e.target.value))}
            />
          </label>
          {messageError && <p>{messageError}</p>}
          <button type="submit" disabled={!userId}>
            Soumettre
          </button>
        </div>
      </Form>
    </Container>
  )
}
