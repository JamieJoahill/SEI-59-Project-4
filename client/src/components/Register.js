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
    } catch (err) {
      console.log('Err ->', err)
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

  return (
    <div className="section register-container">
      
      <form className="section container" onSubmit={handleSubmit}>
        <h2 className="register-form-headline">Register to post your event / venue</h2>
        <hr />
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input 
              className="input"
              type="text" 
              placeholder="e.g Alex Smith"
              name="username"
              value={formData.username}
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input 
              className="input" 
              type="email" 
              placeholder="e.g. alexsmith@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input 
              className="input" 
              type="password" 
              placeholder="e.g. Password123"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password Confirmation</label>
          <div className="control">
            <input 
              className="input" 
              type="password" 
              placeholder="Password Confirmation" 
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <button className="button">
              Submit
            </button>
          </p>
          <p className="control">
            <button className="button" onClick={handleClick}>
              Cancel
            </button>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Register