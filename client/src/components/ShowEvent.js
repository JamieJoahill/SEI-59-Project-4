/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { convertDate } from  './Helpers/date'

const ShowEvent = () => {

  const [event, setEvent] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/events/${id}/`)
        console.log('Data ->', data)
        setEvent(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])


  return (
    <>
      {event ?
        <div className="dark-overlay">
          <div className="background_color" style={{ background: `url(${event.photo}) center center/cover` }}></div>
          <div className="container is-widescreen custom-show-event-container">
            <div className="columns">
              <div className="column is-two-fifths red-column">
                <figure className="image image-is-1by1">
                  <img src={event.photo} alt={event.title} className="show-event-custom-image"/>
                </figure>
              </div>
              <div className="column blue-column">
                <h1 className="title">{event.title}</h1>
                <h5 className="title is-5">{event.venue.name}</h5>
                <div className="custom-date-time">
                  <p>{convertDate(event.date)}</p>
                  <p>{event.start_time}</p>
                </div>
                <div className="category-location">
                  <p className="category"><i className="fas fa-tag"></i> {event.category.category}</p>
                  <p className="location"><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                </div>
                <div className="about">
                  <h4 className="title is-4">About</h4>
                  <p>{event.description}</p>
                  <p>Presented By {event.venue.name}</p>
                </div>
                <div className="venue">
                  <h4 className="title is-4">Venue</h4>
                  <p>{event.venue.name}</p>
                  <p>{event.venue.address}</p>
                  <p>{event.venue.capacity} capacity</p>
                </div>

                <div className="venue">
                  <h4 className="title is-4">Event added by:</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <h2 className="title has-text-centered">
          {hasError ? 'We could not get that event' : 'Event Loading...'}
        </h2>
      }
    </>
  )
}

export default ShowEvent