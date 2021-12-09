/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from './ImageUploadField'
import { headers } from '../lib/headers'
import { getPayLoad } from './Helpers/auth'
import { useParams } from 'react-router-dom'



const UpdateEvent = () => {

  console.log(getPayLoad().sub)

  const [updatedEvent, setUpdateEvent] = useState([])
  const [hasErrors, setHasErrors] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/events/${id}/`)
        setUpdateEvent(data)
        // setFormData(data)
      } catch (err) {
        setHasErrors(true)
      }
    }
    getData()
  }, [id])


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    photo: '',
    location: '',
    start_time: '',
    finish_time: '',
    category: '',
    venue: '',
    owner: getPayLoad().sub,
  })

  const [errorData, setErrorData] = useState({
    title: '',
    description: '',
    date: '',
    photo: '',
    location: '',
    start_time: '',
    finish_time: '',
    category: '',
    venue: '',
    owner: getPayLoad().sub,
  })

  const [categoryData, setCategoryData] = useState({
    category: '',
  })

  const [venueData, setVenueData] = useState({
    name: '',
    address: '',
    venue_image:
      'https://res.cloudinary.com/dmpvulj3q/image/upload/v1638807304/sei_project_4/Image-Coming-Soon-Placeholder-e1518111259296-768x577-2_rnpvni.png',
    capacity: '',
  })


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, photo: url })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/events/', formData, headers)
    } catch (err) {
      console.log('Form Submit Error - >', err)
      setErrorData(err)
    }
  }

  console.log('Form Data ->', updatedEvent)

  const handleFormCancel = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      photo: '',
      location: '',
      start_time: '',
      finish_time: '',
      category: '',
      venue: '',
    })
  }

  const toggleCategoryModal = () => {
    document.getElementById('category-modal').classList.toggle('is-active')
  }

  const toggleVenueModal = () => {
    document.getElementById('venue-modal').classList.toggle('is-active')
  }

  const handleCategoryChange = (event) => {
    const newFormData = {
      ...categoryData,
      [event.target.name]: event.target.value,
    }
    setCategoryData(newFormData)
  }

  const handleVenueChange = (event) => {
    const newFormData = {
      ...venueData,
      [event.target.name]: event.target.value,
    }
    setVenueData(newFormData)
  }

  const handleCategorySubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        'http://localhost:8000/api/categories/',
        categoryData,
        headers
      )
      setCategories([...categories, categoryData])
    } catch (err) {
      console.log('Category Submit Error - >', err)
      setErrorData(err)
    }
  }

  const handleVenueSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/venues/', venueData, headers)
      setVenues([...venues, venueData])
    } catch (err) {
      console.log('Venue Submit Error - >', err)
      setErrorData(err)
    }
  }

  const handleCategoryCancel = () => {
    setCategoryData({
      category: '',
    })
  }

  const handleVenueCancel = () => {
    setVenueData({
      name: '',
      address: '',
      venue_image: '',
      capacity: '',
    })
  }

  const [categories, setCategories] = useState([])
  const [venues, setVenues] = useState([])

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await axios.get('/api/categories/')
        setCategories(data)
      } catch (err) {
        console.log('Err Getting Categories->', err)
      }
    }
    getAllCategories()

    const getAllVenues = async () => {
      try {
        const { data } = await axios.get('/api/venues/')
        setVenues(data)
      } catch (err) {
        console.log('Err Getting Venues->', err)
      }
    }
    getAllVenues()
  }, [])


  return (
    <div className="form-wrapper mb-6">
      <form className="section container columns" onSubmit={handleSubmit}>
        <div className="column is-two-fifths container">
          <div className='register-head-lines section'>
            <h3 className='title has-text-white'>Update your event</h3>
            <p className='has-text-light'>
              Update one of the best nights out in your city.
            </p>
          </div>

          <div className='field is-two-fifths container column justify-input'>
            <div className='field is-two-fifths'>
              <input
                className='form-input'
                type='text'
                placeholder='Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                autoComplete='off'
                errors={errorData}
              />
            </div>
          </div>

          <div className='field is-two-fifths container column justify-input'>
            <div className='field is-two-fifths'>
              <textarea
                className='form-input description-input'
                type='text'
                placeholder='Description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                autoComplete='off'
                errors={errorData}
              />
            </div>
          </div>

          <div className='field is-two-fifths container column justify-input'>
            <div className='control'>
              <ImageUploadField
                value={formData.photo}
                name='photo'
                handleImageUrl={handleImageUrl}
              />
            </div>
          </div>

          <div className='field is-two-fifths container column justify-input'>
            {/* <label className="label">Date</label> */}
            <div className='control field is-three-fifths'>
              <input
                type='date'
                className='form-input'
                name='date'
                placeholder='Date'
                value={formData.date}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          <div className='field is-two-fifths container column justify-input'>
            {/* <label className="label">Location</label> */}
            <div className='field is-two-fifths'>
              <input
                type='text'
                className='form-input'
                placeholder='e.g. Shoreditch, London'
                name='location'
                value={formData.location}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Start Time */}
          <label className='ml-2 label is-two-fifths  column justify-input'>
            Start Time
          </label>
          <div className='field is-two-fifths container column justify-input'>
            {/* <label className="label">Start Time</label> */}
            <div className='field is-two-fifths'>
              <input
                type='time'
                className='form-input'
                name='start_time'
                placeholder={formData.start_time}
                value={formData.start_time}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Finish Time */}
          <label className='ml-2 label is-two-fifths  column justify-input'>
            Finish Time
          </label>
          <div className='field is-two-fifths container column justify-input'>
            <div className='field is-two-fifths'>
              <input
                type='time'
                className='form-input'
                name='finish_time'
                placeholder={formData.finish_time}
                value={formData.finish_time}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Category */}
          <div className='field is-two-fifths container column justify-input'>
            {/* <label className="label">Category</label> */}
            <div className='control field is-three-fifths flex-model'>
              <div className='select cat-select'>
                <select name='category' onChange={handleChange}>
                  <option>Select Category</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    )
                  })}
                </select>
              </div>
              <i className='fas fa-plus' onClick={toggleCategoryModal}></i>
            </div>
          </div>

          {/* Venue */}
          <div className='field is-two-fifths container column justify-input'>
            {/* <label className="label">Venue</label> */}
            <div className='control field is-three-fifths flex-model'>
              <div className='select'>
                <select name='venue' onChange={handleChange}>
                  <option value=''>Select Venue</option>
                  {venues.map((venue) => {
                    return (
                      <option key={venue.id} value={venue.id}>
                        {venue.name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <i className='fas fa-plus' onClick={toggleVenueModal}></i>
            </div>
          </div>

          <div className='field container column justify-input seperate-buttons'>
            <div className='control'>
              <button className='button is-rounded form-button'>SUBMIT</button>
            </div>
            <div className='control'>
              <button
                className='button is-rounded form-button'
                
              >
                CANCEL
              </button>
            </div>
          </div>


        </div>
      </form>


      {/* Category Modal */}
      <div className='modal' id='category-modal'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Add Category</p>
            <button
              className='delete'
              aria-label='close'
              onClick={toggleCategoryModal}
            ></button>
          </header>
          <section className='modal-card-body'>
            <form
              className='section container columns'
              onSubmit={handleCategorySubmit}
            >
              <div className='control column'>
                <input
                  type='text'
                  className='input'
                  name='category'
                  placeholder='e.g. DJ'
                  value={categoryData.category}
                  onChange={handleCategoryChange}
                  errors={errorData}
                />
              </div>
              <div className='field is-grouped column'>
                <div className='control'>
                  <button className='button is-success'>Submit</button>
                </div>
                <div className='control'>
                  <button className='button' onClick={handleCategoryCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </section>
          <footer className='modal-card-foot'>
            {/* <button className="button is-success">Submit</button>
            <button className="button" onClick={handleCategoryCancel}>Cancel</button> */}
          </footer>
        </div>
      </div>

      {/* Venue Modal */}
      <div className='modal' id='venue-modal'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Add Venue</p>
            <button
              className='delete'
              aria-label='close'
              onClick={toggleVenueModal}
            ></button>
          </header>
          <section className='modal-card-body'>
            <form
              className='section container columns'
              onSubmit={handleVenueSubmit}
            >
              <div className='column container'>
                <div className='field is-two-fifths container'>
                  <label className='label'>Name</label>
                  <div className='control'>
                    <input
                      type='text'
                      className='input'
                      name='name'
                      placeholder='e.g. Strongroom'
                      value={venueData.name}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div>

                <div className='field is-two-fifths container'>
                  <label className='label'>Address</label>
                  <div className='control'>
                    <input
                      type='text'
                      className='input'
                      name='address'
                      placeholder='e.g. 120-124 Curtain Rd, Shoreditch, London EC2A 3SQ, UK'
                      value={venueData.address}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div>

                {/* <div className="field is-two-fifths container">
                  <label className="label">Venue Image</label>
                  <div className="control">
                    <input 
                      type="text" 
                      className="input"
                      name="venue_image"
                      placeholder={venueData.venue_image}
                      value={venueData.venue_image}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div> */}

                <div className='field is-two-fifths container'>
                  <div className='control'>
                    <ImageUploadField
                      value={venueData.venue_image}
                      name='venue_image'
                      handleImageUrl={() => handleImageUrl()}
                    />
                  </div>
                </div>

                <div className='field is-two-fifths container'>
                  <label className='label'>Capacity</label>
                  <div className='control'>
                    <input
                      type='number'
                      className='input'
                      name='capacity'
                      placeholder='e.g. 300'
                      value={venueData.capacity}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div>

                <div className='field is-grouped'>
                  <div className='control'>
                    <button className='button is-success'>Submit</button>
                  </div>
                  <div className='control'>
                    <button className='button' onClick={handleVenueCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <footer className='modal-card-foot'>
            {/* <button className="button is-success">Submit</button>
            <button className="button" onClick={handleVenueCancel}>Cancel</button> */}
          </footer>
        </div>
      </div>






    </div>
  )
}

export default UpdateEvent