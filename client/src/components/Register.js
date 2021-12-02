import React from 'react'

const Register = () => {
  return (
    <div className="section register-container">
      
      <form action="#" className="section container">
        <h2 className="register-form-headline">Register to post your event / venue</h2>
        <hr />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password Confirmation</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <a className="button">
              Submit
            </a>
          </p>
          <p className="control">
            <a className="button">
              Cancel
            </a>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Register