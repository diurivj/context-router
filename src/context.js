import React, { createContext, useState } from 'react'

export const MyContext = createContext()

function MyProvider(props) {
  const [state, setState] = useState({
    user: {},
    isLogged: false
  })

  const setUser = user => {
    setState(prevState => ({
      ...prevState,
      user,
      isLogged: !prevState.isLogged
    }))
  }

  return (
    <MyContext.Provider
      value={{
        state,
        setUser
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider
