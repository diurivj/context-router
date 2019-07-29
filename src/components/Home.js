import React, { useContext } from 'react'
import authService from '../services/authService'
import { MyContext } from '../context'

function Home() {
  const context = useContext(MyContext)
  const handleLogin = () => {
    authService()
      .then(response => {
        console.log(response, context)
        context.setUser(response.user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>The user:</h1>
      <p>{context.state.user.email}</p>
      <p>{context.state.user.name}</p>
      <p>{context.state.user.lastName}</p>
      {!context.state.isLogged && <button onClick={handleLogin}>Login</button>}
    </>
  )
}

export default Home
