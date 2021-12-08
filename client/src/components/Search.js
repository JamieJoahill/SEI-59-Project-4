/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link, useLocation, useHistory } from 'react-router-dom'
import * as QueryString from 'query-string'

const Search = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [hasError, setHasError] = useState(false)
  const [search, setSearch] = useState('')
  const props = useLocation()
  const history = useHistory()
  const params = QueryString.parse(props.search)

  const [query, setQuery] = useState(params)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/events')
        setEvents(data)

        const filtered = data.filter((event) => {
          // console.log(event.title)
          return params.event
            ? event.title.toLowerCase().includes(params.event.toLowerCase())
            : event
        })
        setFilteredEvents(filtered)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [params.event])

  //console.log('Events ->', events)

  // const filteredEvents = () => {
  //   const regexSearch = new RegExp(search, 'ig')

  //   return events.filter(event => {
  //     return regexSearch.exec(event.title)
  //     // return regexSearch.exec(event.title) && (event.category === categoryOption || categoryOption === 'all') && (event.venue === venueOption || venueOption === 'all')
  //   })
  // }

  const handleSearch = (event) => {
    console.log('Search Value ->', event.target.value)
    // setSearch(event.target.value)
    const newQuery = { ...query, [event.target.name]: event.target.value }
    setQuery(newQuery)
    history.push(`/search?${QueryString.stringify(newQuery)}`)
    // console.log(newQuery)
  }

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

  // console.log('Filtered Events',filteredEvents())
  console.log('Params', params.event)
  return (
    <section className='section dark-overlay'>
      <div className='container push-down smaller-container'>
        <div className='show-search-count mb-5'>
          {filteredEvents.length === 0 ? (
            'No events found'
          ) : (
            <Fragment>
              {filteredEvents.length === 1
                ? `${filteredEvents.length} event`
                : `${filteredEvents.length} events`}
            </Fragment>
          )}
        </div>
        {events.length ? (
          <Fragment>
            <div className='control has-icons-left search-input-size'>
              <input
                type='text'
                className='input is-rounded container mb-4 search-placeholder   mb-5'
                placeholder={`${params.event}`}
                name='event'
                onChange={handleSearch}
                autoComplete='off'
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-search'></i>
              </span>
            </div>
            <div className='columns is-multiline container search-list'>
              <ul>
                {filteredEvents.length === 0 ? (
                  <Fragment>
                    <h3 className="title is-3 mt-4 has-text-white">{`Hm, couldn't find anything for "${params.event}"`}</h3>
                  </Fragment>
                ) : (
                  <Fragment>
                    {filteredEvents.map((event) => {
                      return (
                        <div key={event.id} className='list-container'>
                          <div className='search-element-container column'>
                            <Link to={`events/${event.id}/`}>
                              <figure className='image is-96x96'>
                                <img
                                  src={event.photo}
                                  alt={event.title}
                                  className='show-event-custom-image'
                                />
                              </figure>
                            </Link>
                            <div className='text-container'>
                              <div className='event-description ml-4'>
                                <Link to={`events/${event.id}/`}>
                                  <h4 className='title is-4 has-text-white'>
                                    {event.title}
                                  </h4>
                                </Link>
                                <h3 className='has-text-grey-light'>
                                  {convertDate(event.date)}
                                </h3>
                              </div>
                              <div className='venue-description'>
                                <h3 className='has-text-white'>
                                  {event.venue.name}
                                </h3>
                                <h3 className='has-text-grey-light'>
                                  {event.location}
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className='line mt-5'></div>
                        </div>
                      )
                    })}
                  </Fragment>
                )}
              </ul>
            </div>
          </Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  )
}

export default Search
