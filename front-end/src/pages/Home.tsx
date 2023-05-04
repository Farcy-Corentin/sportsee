import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const [userId, setUserId] = useState<number | null >(null)
  const navigate = useNavigate()
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/user/${userId}`)
  }
  
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder={'Rentre votre identifiant'} onChange={(e) => setUserId(parseInt(e.target.value))}/>
          <button>Test</button>
        </form>
    </>
  )
}
