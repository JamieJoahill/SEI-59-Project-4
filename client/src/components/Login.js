/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Login = () => {

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Form Data ->', formData)
    try {
      const  { data } = await axios.post('http://localhost:8000/auth/login/', formData)
      setTokenToLocalStorage(data.token)
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
    <div className="section register-container">
      
      <form className="section container" onSubmit={handleSubmit}>
        <h2 className="register-form-headline">Log in to post your event</h2>
        <h3>Welcome to Festivents - A community where you can share your event or attend others events</h3>
        <hr />

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input 
              className="input" 
              type="email" 
              placeholder="e.g. alexsmith@festievent.com"
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

export default Login