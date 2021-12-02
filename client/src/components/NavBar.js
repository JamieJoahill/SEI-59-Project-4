/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  const [query, setQuery] = useState('')
  const [input, setInput] = useState('')
  const location = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Searched Query ->', input)
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
            <Link className="purple-highlight-text" to="/events">
              See all of our events
            </Link>
          </div>
        </div>
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Search for an event or venue" 
              className="navbar-search"
              onChange={e => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className="navbar-end">
          <div className="navbar-item navbar-btn">
            <Link className="navbar-btn-link" to="/register">Register</Link>
          </div>
          <div className="navbar-item navbar-btn">
            <Link className="navbar-btn-link" to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar