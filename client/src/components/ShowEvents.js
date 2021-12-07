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
        const { data } = await axios.get('/api/events')
        setEvents(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  const convertDate = (date) => {
    const newDate = new Date(date)
    const dateArr = []
    const newStringDate = []
    dateArr.push(newDate.toString().slice(0, 10).split(' '))
    newStringDate.push(dateArr[0][0])
    newStringDate.push(dateArr[0][2])
    newStringDate.push(dateArr[0][1])
    return newStringDate.toString().split(',').join(' ')
  }

  // console.log('Events ->', events)

  return (
    <section className="section dark-overlay">
      <div className="container">
        <div className="show-event-count">
          <div>{events.length} available events</div>
        </div>
        {events.length ?
          <div className="columns is-multiline">
            {events.map((event) => {
              return (
                <div key={event.id} className="column is-one-quarter-desktop is-one-third-tablet">

                  <div className="custom-card">
                    <Link to={`/events/${event.id}/`}>

                      <div className="custom-card-image">
                        <figure className="image image-is-1by1">
                          <img src={event.photo} alt={event.title} />
                        </figure>
                      </div>

                      <div className="custom-card-content">
                        <div className="card-title">
                          {event.title.length < 20 ?
                            <h3 className="title is-3 white-text">{event.title}</h3>
                            :
                            <h4 className="title is-4 white-text">{event.title}</h4>
                          }
                        </div>
                      </div>

                    </Link>

                    <p className="custom-date">{convertDate(event.date)} {event.start_time}</p>

                    <div className="venue-wrapper">
                      <p className="venue-name">{event.venue.name}</p>
                      <p className="venue-location">{event.location}</p>
                    </div>
                    
                  </div>

                  {/* <div className="card">
                    <div className="card-image">
                      <figure className="image image-is-1by1">
                        <img src={event.photo} alt={event.title} />
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
                  </div> */}


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
              : 
              <div className="Loading-spinner">
                <p>Loading...</p>
              </div>
            }
          </h2>
        }
      </div>
    </section>
  )
}

export default ShowEvents