/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { convertDate } from  './helpers/date'
import { headers } from '../lib/headers'

const ShowEvent = () => {

  const [event, setEvent] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
  
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/events/${id}/`)
        // console.log('Data ->', data)
        setEvent(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  { event ? document.title = `${event.title} | RICE` : ''}

  // Get Username from Localstorage 
  // const getMessage = localStorage.getItem('message')
  // const getUsername = getMessage.split(' ').splice(2, 3)

  // console.log(getUsername[0])

  // console.log('Event', event)

  let LoggedInUserIDString
  let LoggedInUserID

  const checkForUserLogin = () => {
    if (localStorage.length > 1) {
      LoggedInUserIDString = atob(localStorage.getItem('token').split('.')[1])
      LoggedInUserID = JSON.parse(LoggedInUserIDString)
    }
  }

  checkForUserLogin()

  

  // console.log('Logged In User - >', LoggedInUserID.sub)
  //   console.log('event owner', event)

  // console.log('Event owner id', event.owner.id)

  const handleEdit = () => {
    history.push(`/events/${event.id}/update`)
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/api/events/${id}/`, headers)
    history.push('/')
  }

  return (
    <>
      {event ?
        <div className="dark-overlay event-vh">
          <div className="background_color" style={{ background: `url(${event.photo}) center center/cover` }}></div>
          <div className="container is-widescreen custom-show-event-container">
            <div className="columns">
              <div className="column is-two-fifths red-column">
                <div className="image-wrapper">
                  <figure className="image image-is-1by1">
                    <img src={event.photo} alt={event.title} className="show-event-custom-image"/>
                  </figure>
                  {/* Logic here to show button is user created that event */}
                  {localStorage.length > 1 && 
                  <Fragment>
                    {LoggedInUserID.sub === event.owner.id &&
                    <div className="edit-delete-button">
                      <button className="button is-success is-outlined" onClick={handleEdit}>Edit event</button>
                      <button className="button is-danger is-outlined" onClick={handleDelete}>Delete event</button>
                    </div>  
                    }
                  </Fragment>
                  }
                </div>
              </div>
              <div className="column blue-column container-main">
                <h1 className="title">{event.title}</h1>
                <h5 className="title is-5">{event.venue.name}</h5>
                <div className="custom-date-time mb-3">
                  <p>{convertDate(event.date)}</p>
                  <p>{event.start_time}</p>
                </div>
                <div className="category-location">
                  <p className="category"><i className="fas fa-tag"></i> {event.category.category}</p>
                  <p className="location"><i className="fas fa-map-marker-alt"></i>{event.location}</p>
                </div>
                <div className="about">
                  <h4 className="title is-4">About</h4>
                  <p>{event.description}</p>
                  <p>Presented By {event.venue.name}</p>
                </div>
                <div className="venue split-venue">
                  <div className="venue-info">
                    <div className="line"></div>
                    <h4 className="title is-4">Venue</h4>
                    <Link to={`/venues/${event.venue.id}/`}>
                      <h3 className="title is-4 mb-3">{event.venue.name}</h3>
                    </Link>
                    <p>
                      {event.venue.address}
                      <a href={`https://www.google.com/maps/place/${event.venue.address}`} target="_blank" rel="noreferrer">
                        <i className="far fa-window-restore"></i>
                      </a>
                      <button className='button is-rounded has-text-white is-dark open-in-maps-btn'>
                        <a href={`https://www.google.com/maps/place/${event.venue.address}`} target="_blank" rel="noreferrer" className="remove-link-styling">
                          <i className="fas fa-map-marker-alt"></i>OPEN IN MAPS
                        </a>
                      </button>
                    </p>
                    <p>{event.venue.capacity} capacity</p>
                  </div>
                  
                  <div className="event-image-container">
                    <figure className="image">
                      <img src={event.venue.venue_image} alt={event.title} className="show-event-custom-image"/>
                    </figure>
                  </div>

                </div>

                <div className="venue">
                  <div className="line"></div>
                  <h4 className="title is-4">Event posted by: {event.owner.email}</h4>
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