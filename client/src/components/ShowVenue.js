/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const ShowVenue = () => {
  const [venue, setVenue] = useState([])
  const [events, setEvents] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/venues/${id}/`
        )
        setVenue(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()

    const getEvents = async () => {
      try {
        const { data } = await axios.get('/api/events')
        setEvents(data)
      } catch (err) {
        console.log('Err', err)
      }
    }
    getEvents()
  }, [id])

  console.log('Events ->', events)

  const filteredByVenue = events.filter(
    (event) => event.venue.name === venue.name
  )

  console.log('Filtered by venue ->', filteredByVenue)

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

  { venue ? document.title = `${venue.name} | RICE` : ''}

  return (
    <Fragment>
      <div className='venue-overlay'>
        <div className='venue-header'>
          <div className='container position-relative'>
            <div className='split-venue-title-image'>
              <div className='venue-title'>
                <div className='venue-title-header'>
                  <h3 className='title is-3 has-text-white'>Venue</h3>
                  <h1 className='title is-1 custom-h1'>{venue.name}</h1>
                </div>
              </div>
              <div className='venue-image'>
                <figure className='image image-is-1by1 show-venue-custom-image'>
                  <img
                    src={venue.venue_image}
                    alt={venue.title}
                    className='show-venue-custom-image'
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section container venue-info-container'>
        {venue.about ?
          <div className='venue-about'>
            <h4 className='mb-5'>About</h4>
            <p>
              {venue.about}
            </p>
          </div>
          :
          <></>
        }
        <div className='venue-info'>
          <h4 className='mb-5'>Information</h4>
          <ul>
            <li className='mb-5'>
              <h5 className='mb-2'>Capacity</h5>
              <p>{venue.capacity}</p>
            </li>
            <li className='mb-5'>
              <h5 className='mb-2'>Address</h5>
              <p>{venue.address}</p>

              <a
                href={`https://www.google.com/maps/place/${venue.address}`}
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                Get directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='section container'>
        <h4 className='mb-5'>Upcoming events</h4>
        <div className='upcoming-events-container columns is-multiline'>
          {/* Insert upcoming events here */}
          {filteredByVenue.map((event) => {
            return (
              <div key={event.id} className='column is-one-quarter-desktop is-one-third-tablet'>
                <div className='custom-card'>
                  <Link to={`/events/${event.id}/`}>
                    <div className='custom-card-image'>
                      <figure className='image image-is-1by1'>
                        <img src={event.photo} alt={event.title} />
                      </figure>
                    </div>

                    <div className='custom-card-content mt-2'>
                      <div className='card-title'>
                        {event.title.length < 20 ? (
                          <h3 className='title is-3 has-text-black mb-2'>
                            {event.title}
                          </h3>
                        ) : (
                          <h4 className='title is-4 has-text-black mb-2'>
                            {event.title}
                          </h4>
                        )}
                      </div>
                    </div>
                  </Link>

                  <p className='custom-date'>
                    {convertDate(event.date)} {event.start_time}
                  </p>

                  <div className='venue-wrapper'>
                    <p className='venue-name '>{event.venue.name}</p>
                    <p className='venue-location'>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='section'></div>
    </Fragment>
  )
}

export default ShowVenue
