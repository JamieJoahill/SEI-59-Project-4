import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Festivents</strong> by <Link to="github.com">Jamie Joahill</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer