/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Login = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const setUsernameToLocalStorage = (message) => {
    window.localStorage.setItem('message', message)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const  { data } = await axios.post('http://localhost:8000/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      setUsernameToLocalStorage(data.message)
      history.push('/')
      handleClick()
    } catch (err) {
      setError(true)
    }
  }

  const handleClick = () => {
    setFormData({
      username: '',
      password_confirmation: '',
    })
  }


  return (
    <div className='section register-container'>
      <div className='register-head-lines section'>
        <h3 className='title has-text-white'>Log in</h3>
        <p className='has-text-light'>
          Create the best nights out in your city.
        </p>
      </div>
      <form className='section container' onSubmit={handleSubmit}>
        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
        </div>

        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
        </div>

        <div className="field container column justify-input seperate-buttons">
          <div className="control">
            <button className="button is-rounded form-button">SUBMIT</button>
          </div>
          <div className="control">
            <button className='button is-rounded form-button' onClick={handleClick}>CANCEL</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Login