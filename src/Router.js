import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import { MyContext } from './context'

const Router = () => (
  <BrowserRouter>
    <MyContext.Consumer>
      {context => {
        if (!context.state.isLogged) {
          return (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          )
        } else {
          return (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink
                onClick={() => {
                  context.setUser({})
                }}
                to="/"
              >
                Logout
              </NavLink>
            </>
          )
        }
      }}
    </MyContext.Consumer>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Router
