/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getPayLoad } from './Helpers/auth'

const NavBar = () => {

  const [query, setQuery] = useState('')
  const [input, setInput] = useState('')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {

  }, [location.pathname])

  // Authenticated - Determines if the user has the right access to our site
  const userIsAuth = () => {
    const payload = getPayLoad()
    if (!payload) return false
    // console.log('Payload ->', payload.sub > 1)
    return payload.sub >= 0
  }

  // console.log('User is auth ->',userIsAuth())

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('Searched Query ->', input)
    setInput(input)
    
    setInput('')
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title">
            <Link to="/" className="navbar-brand-text">Festivents</Link>
          </span>
        </div>
        <div className="navbar-start">

          <div className="navbar-item">
            <Link className=" navbar-btn-link" to="/events">
                EVENTS
            </Link>
            {userIsAuth() ?
              <>
                <Link to="/events/new" className=" navbar-btn-link">Add Event</Link>
                <Link to="/venues/new" className=" navbar-btn-link">Add Venue</Link>
              </>
              :
              ''
            }

          </div>
        </div>
        <div className="search-form-container">
          <form onSubmit={handleSubmit} className="search-form">
            <input 
              type="text" 
              placeholder="Search for an event or venue" 
              className="navbar-search"
              onChange={e => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className="navbar-end">
          {!userIsAuth() ?
            <>
              <div className="navbar-item navbar-btn">
                <Link className="navbar-btn-link" to="/register">Register</Link>
              </div>
              <div className="navbar-item navbar-btn">
                <Link className="navbar-btn-link" to="/login">Log in</Link>
              </div>
            </>
            :
            <div className="navbar-item navbar-btn">
              <Link className="navbar-btn-link" onClick={handleLogout} to="/">Log out</Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar