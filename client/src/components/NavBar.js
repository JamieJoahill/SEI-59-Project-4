/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getPayLoad } from './Helpers/auth'
import * as QueryString from 'query-string'
// import axios from 'axios'

const NavBar = () => {
  const [search, setSearch] = useState('')
  const location = useLocation()
  const history = useHistory()

  const [query, setQuery] = useState({})
  // const [events, setEvents] = useState([])
  // const [hasErrors, setHasErrors] = useState(false)
  // const props = useLocation()
  // const params = QueryString.parse(props.search)

  // console.log('Events', events)

  const setInput = (e) => {
    console.log('e', e)
    setQuery({ event: e.target.value })
  }

  // Authenticated - Determines if the user has the right access to our site
  const userIsAuth = () => {
    // const payload = getPayLoad()
    // if (!payload) return false
    // // console.log('Payload ->', payload.sub > 1)
    // return payload.sub >= 0
    const payload = getPayLoad()
    // console.log(payload)
    // console.log(!payload)
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
  // console.log('User is auth ->',userIsAuth())

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    // console.log('Searched Query ->', input)
    // setQuery(input)
    history.push(`/search?${QueryString.stringify(query)}`)
  }

  // Get Username from Localstorage
  const getMessage = localStorage.getItem('message')
  let getUsername
  // const getUsername = getMessage.split(' ').splice(2, 3)

  // console.log(getUsername[0])

  window.onscroll = () => {
    if (window.scrollY > 15) {
      document.querySelector('.navbar').classList.add('black')
    } else if (window.scrollY < 15) {
      document.querySelector('.navbar').classList.remove('black')
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container container'>
        <div className='navbar-search'>
          <div className='search-form-container'>
            <form onSubmit={handleSearchSubmit} className='search-form'>
              <input
                type='text'
                placeholder='Search for an event or venue'
                className='navbar-search'
                onChange={(e) => setInput(e)}
              />
            </form>
          </div>
        </div>
        <div className='navbar-logo'>
          <Link to='/'>
            <div id='square'></div>
          </Link>
        </div>
        <div className='navbar-buttons'>
          {!userIsAuth() ? (
            <>
              <div className='navbar-item navbar-btn'>
                <Link className='navbar-btn-link' to='/register'>
                  Register
                </Link>
              </div>
              <div className='navbar-item navbar-btn'>
                <Link className='navbar-btn-link login' to='/login'>
                  Log in
                </Link>
              </div>
            </>
          ) : (
            <div className='navbar-item navbar-btn'>
              <Link className='navbar-btn-link' onClick={handleLogout} to='/'>
                Log out ({getUsername[0]})
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
