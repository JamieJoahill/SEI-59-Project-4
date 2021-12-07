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

  // Get Username from Localstorage 
  // const getMessage = localStorage.getItem('message')
  // const getUsername = getMessage.split(' ').splice(2, 3)

  // console.log(getUsername[0])

  // console.log('Event', event)

  // const LoggedInUserIDString = atob(localStorage.getItem('token').split('.')[1])
  // const LoggedInUserID = JSON.parse(LoggedInUserIDString)

  //   console.log('Logged In User - >', LoggedInUserID.sub)
  //   console.log('event owner', event)

  return (
    <>
      {event ?
        <div className="dark-overlay">
          <div className="background_color" style={{ background: `url(${event.photo}) center center/cover` }}></div>
          <div className="container is-widescreen custom-show-event-container">
            <div className="columns">
              <div className="column is-two-fifths red-column">
                <div className="image-wrapper">
                  <figure className="image image-is-1by1">
                    <img src={event.photo} alt={event.title} className="show-event-custom-image"/>
                  </figure>
                  {/* Logic here to show button is user created that event */}
                  {/* {LoggedInUserID.sub === event.owner &&
                  <div className="edit-delete-button">
                    <button className="button is-success is-outlined">Edit event</button>
                    <button className="button is-danger is-outlined">Delete event</button>
                  </div>  
                  } */}
                </div>
              </div>
              <div className="column blue-column container-main">
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
                  <div className="line"></div>
                  <h4 className="title is-4 poppins">Venue</h4>
                  <h3 className="title is-3">{event.venue.name}</h3>
                  <p>
                    {event.venue.address}
                    <a href={`https://www.google.com/maps/place/${event.venue.address}`} target="_blank" rel="noreferrer">
                      <i className="far fa-window-restore"></i>
                    </a>
                  </p>
                  <p>{event.venue.capacity} capacity</p>
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