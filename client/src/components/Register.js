/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errorData, setErrorData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Form Data ->', formData)
    try {
      await axios.post('http://localhost:8000/auth/register/', formData)
      history.push('/login')
      handleClick()
    } catch (err) {
      console.log('Error Response ->', err.response.data)
      setErrorData(err.response.data)
      setError(true)
    }
  }

  console.log('Error Data', errorData)

  // console.log('Errors Username ->', errorData.username)
  // console.log('Errors Password ->', errorData.password)
  // console.log(
  //   'Errors Password_confirmation ->',
  //   errorData.password_confirmation[0]
  // )

  const handleClick = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    })

    setErrorData({
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
  }

  const username = !errorData.username ? 'Username' : 'Username cannot be blank'
  const email = !errorData.username ? 'Email' : 'Email cannot be blank'
  const password = !errorData.password ? 'Password' : 'Password cannot be blank'
  const passwordConfirmation = !errorData.password_confirmation
    ? 'Password Confirmation'
    : 'Password cannot be blank'

  document.title = 'DICE | Register'

  return (
    <div className='section register-container'>
      <div className='register-head-lines'>
        <h3 className='title has-text-white'>Register</h3>
        <p className='has-text-light'>
          Discover the best nights out in your city.
        </p>
        {error && 
          <div className='event-errors-container mt-3'>
            <div><span className='has-text-white'>Username:</span> <span className='has-text-danger'>{errorData.username}</span></div>
            <div><span className='has-text-white'>Email:</span> <span className='has-text-danger'>{errorData.email}</span></div>
            <div><span className='has-text-white'>Password:</span> <span className='has-text-danger'>{errorData.password}</span></div>
            <div><span className='has-text-white'>Password Confirmation:</span> <span className='has-text-danger'>{errorData.password_confirmation}</span></div>
            {/* <div>Username: {errorData.username}</div>
            <div>Email: {errorData.email}</div>
            <div>Password: {errorData.password}</div>
            <div>Password Confirmation: {errorData.password_confirmation}</div> */}
          </div>
        } 
      </div>
      <form className='section container' onSubmit={handleSubmit}>
        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='text'
              placeholder={username}
              name='username'
              value={formData.username}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
        </div>

        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='email'
              placeholder={email}
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
              placeholder={password}
              name='password'
              value={formData.password}
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
              placeholder={passwordConfirmation}
              name='password_confirmation'
              value={formData.password_confirmation}
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
        </div>

        <div className='field container column justify-input seperate-buttons'>
          <div className='control'>
            <button className='button is-rounded form-button'>SUBMIT</button>
          </div>
          <div className='control'>
            <button
              className='button is-rounded form-button'
              onClick={handleClick}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
