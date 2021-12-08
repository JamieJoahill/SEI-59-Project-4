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
      console.log('Err ->', err.response)
      setErrorData(err.response.data.errors)
    }
  }

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
  // console.log('Form Data ->', formData)
  return (
    <div className='section register-container'>
      <div className='register-head-lines section'>
        <h3 className='title has-text-white'>Register</h3>
        <p className='has-text-light'>
          Discover the best nights out in your city.
        </p>
      </div>
      <form className='section container' onSubmit={handleSubmit}>
        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='text'
              placeholder='Username'
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
              type='text'
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

        <div className='field is-two-fifths container column justify-input'>
          <div className='field is-two-fifths'>
            <input
              className='form-input'
              type='password'
              placeholder='Password Confirmation'
              name='password_confirmation'
              value={formData.password_confirmation}
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

export default Register
