/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const ShowVenue = () => {
  const [venue, setVenue] = useState([])
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
  }, [id])

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
        <div className="venue-about">
          <h4 className='mb-5'>About</h4>
          <p>Strongroom is an eclectic, independently-owned bar and late night venue that also happens to be home to one of Londons award winning studios. Run by a close-knit team and surrounded by an inspiring mix of artists and creative businesses that help build Strongrooms event listings.</p>
        </div>
        <div className="venue-info">
          <h4 className='mb-5'>Information</h4>
          <ul>
            <li className='mb-5'>
              <h5 className='mb-2'>Capacity</h5>
              <p>{venue.capacity}</p>
            </li>
            <li className='mb-5'>
              <h5 className='mb-2'>Address</h5>
              <p>{venue.address}</p>
              
              <a href={`https://www.google.com/maps/place/${venue.address}`} target="_blank" rel="noreferrer"> Get directions
              </a>

            </li>
          </ul>
        </div>
      </div>
      <div className='section'></div>
    </Fragment>
  )
}

export default ShowVenue
