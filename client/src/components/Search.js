/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link, useLocation, useHistory } from 'react-router-dom'
import * as QueryString from 'query-string'

const Search = () => {

  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [hasError, setHasError] =  useState(false)
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

        const filtered = data.filter(event => {
          // console.log(event.title)
          return params.event ? event.title.toLowerCase().includes(params.event.toLowerCase()) : event
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

  // console.log('Filtered Events',filteredEvents())
  console.log('Params', params.event)
  return (
    <section className="section dark-overlay">
      <div className="container">
        <div className="show-search-count">
          {filteredEvents.length} events
        </div>
        {events.length ?
          <Fragment>
            <hr /> 
            <input type="text" className="input is-rounded container mb-4 search-placeholder" placeholder={`${params.event}`} name="event" onChange={handleSearch}/>
            <div className="columns is-multiline">
              <ul>
                {filteredEvents.map((event) => {
                  return (
                    <Fragment key={event.id}>
                      <div className="search-element-container column container">
                        <Link to={`events/${event.id}/`}>
                          <figure className="image is-96x96">
                            <img src={event.photo} alt={event.title} className="show-event-custom-image"/>
                          </figure>
                        </Link>
                        <div className="text-container">
                          <div className="event-description ml-4">
                            <Link to={`events/${event.id}/`}>
                              <h4 className="title is-4">{event.title}</h4>
                            </Link>
                            <h3>{event.date}</h3>
                          </div>
                          <div className="venue-description">
                            <h3>{event.venue.name}</h3>
                            <h3>{event.location}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="line"></div>
                    </Fragment>
                  )
                })}
              </ul>
            </div>
          </Fragment>
          :
          <div>Loading...</div>
        }
      </div>
    </section>
  )
}

export default Search