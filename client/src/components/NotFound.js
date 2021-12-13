import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <section className='section not-found'>
      <div className="container section align-error-page">
        <h1 className='title is-1 has-text-grey'>404 | This page could not be found. </h1>
        <Link className='title is-2 has-text-white' to='/'>Go to the homepage</Link>
      </div>
    </section>
  )
}

export default NotFound

