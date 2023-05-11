import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

const Form = styled('form')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    <Form action="" method="post" onSubmit={handleSubmit}>
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
    </Form>
  )
}
