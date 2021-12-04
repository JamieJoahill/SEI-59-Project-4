import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowEvents from './components/ShowEvents'
import Register from './components/Register.js'
import Login from './components/Login'
import ShowEvent from './components/ShowEvent'
import AddEvent from './components/AddEvent'
import AddVenue from './components/AddVenue'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={ShowEvents} />
        <Route exact path="/events/new" component={AddEvent} />
        <Route exact path="/events/:id/" component={ShowEvent} />
        <Route exact path="/venues/new" component={AddVenue} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
