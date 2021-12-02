/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowEvents = () => {

  const [events, setEvents] = useState([])
  const [hasError, setHasError] =  useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        // const { data } = await axios.get('/events')
        const { data } = await axios.get('api/events')
        setEvents(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  console.log('Events ->', events)

  return (
    <section className="section">
      <div className="container">
        {events.length ?
          <div className="columns is-multiline">
            {events.map((event) => {
              return (
                <div key={event.id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image image-is-1by1">
                        <img src={event.photos} alt={event.title} />
                      </figure>
                    </div>
                    <div className="card-header">
                      <div className="card-header-title">
                        <h2>{event.title}</h2>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>{event.location}</p>
                      <hr />
                      <p>{event.details}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 
              <div className="container">
                <h2 className="getting-events-error-header">Whoops!</h2>
                <h3>This page has probably gone to one of our events...</h3>
                <p>Not to worry, You can head back over to our <Link to="/">homepage</Link></p>
              </div>
              : 'Events Loading...'}
          </h2>
        }
      </div>
    </section>
  )
}

export default ShowEvents