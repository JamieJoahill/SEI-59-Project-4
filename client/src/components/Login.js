import React from 'react'

const Login = () => {
  return (
    <div className="section register-container">
      
      <form action="#" className="section container">
        <h2 className="register-form-headline">Log in to post your event</h2>
        <h3>Welcome to Festivents - A community where you can share your event or attend others events</h3>
        <hr />

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@festievent.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. Password123" />
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

export default Login