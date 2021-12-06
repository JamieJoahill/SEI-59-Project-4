/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
// import { getTokenFromLocalStorage } from './Helpers/auth'
import { ImageUploadField } from './ImageUploadField'
import { headers } from '../lib/headers'

const AddEvent = () => {

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
  })

  const [categoryData, setCategoryData] = useState({
    category: '',
  })

  const [venueData, setVenueData] = useState({
    name: '',
    address: '',
    venue_image: '',
    capacity: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, photo: url })
  }

  // console.log('formData ->', JSON.stringify(formData))

  // console.log('errorData ->', errorData)

  // console.log('headers->', headers)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/events/', JSON.stringify(formData), headers)
    } catch (err) {
      console.log('Form Submit Error - >', err)
      setErrorData(err)
    }
  }

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
    const newFormData = { ...categoryData, [event.target.name]: event.target.value }
    setCategoryData(newFormData)
  }

  const handleVenueChange = (event) => {
    const newFormData = { ...venueData, [event.target.name]: event.target.value }
    setVenueData(newFormData)
  }

  const handleCategorySubmit = async (event) => {
    
  }

  const handleVenueSubmit = async (event) => {

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

  return (
    <div className="form-wrapper">
      <form className="section container columns" onSubmit={handleSubmit}>

        <div className="column is-two-fifths container">

          <div className="field is-two-fifths container">
            <label className="label">Title</label>
            <div className="control">
              <input 
                type="text" 
                className="input" 
                placeholder="Event title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          <div className="field is-two-fifths container">
            <label className="label">Description</label>
            <div className="control">
              <textarea 
                type="text" 
                className="textarea" 
                placeholder="Enter your description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          <div className="field is-two-fifths container">
            <div className="control">
              <ImageUploadField
                value={formData.photo}
                name="photo"
                handleImageUrl={handleImageUrl}
              />
            </div>
          </div>

          {/* Date */}
          <div className="field is-two-fifths container">
            <label className="label">Date</label>
            <div className="control">
              <input 
                type="date" 
                className="input"
                name="date"
                value={formData.date}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Photo Upload */}

          {/* Location */}
          <div className="field is-two-fifths container">
            <label className="label">Location</label>
            <div className="control">
              <input 
                type="text" 
                className="input" 
                placeholder="e.g. Shoreditch, London"
                name="location"
                value={formData.location}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Start time */}
          <div className="field is-two-fifths container">
            <label className="label">Start Time</label>
            <div className="control">
              <input 
                type="time" 
                className="input"
                name="start_time"
                placeholder={formData.start_time}
                value={formData.start_time}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Finish time */}
          <div className="field is-two-fifths container">
            <label className="label">Finish Time</label>
            <div className="control">
              <input 
                type="time" 
                className="input"
                name="start_time"
                placeholder={formData.finish_time}
                value={formData.finish_time}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

          {/* Category */}
          <div className="field is-two-fifths container">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select name="category" onChange={handleChange}>
                  <option value="">Select Category</option>
                  <option value="DJ">DJ</option>
                  <option value="Open mic">Open mic</option>
                  <option value="Gigs">Gigs</option>
                  <option value="Festival">Festival</option>
                </select>
              </div>
              <i className="fas fa-plus" onClick={toggleCategoryModal}></i>
            </div>
          </div>

          
          {/* Venue */}
          <div className="field is-two-fifths container">
            <label className="label">Venue</label>
            <div className="control">
              <div className="select">
                <select name="category" onChange={handleChange}>
                  <option value="">Select Venue</option>
                  <option value="Strongroom">Strongroom</option>
                </select>
              </div>
              <i className="fas fa-plus" onClick={toggleVenueModal}></i>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
            <div className="control">
              <button className="button" onClick={handleFormCancel}>Cancel</button>
            </div>
          </div>



        </div>


      </form>
      {/* Category Modal */}
      <div className="modal" id="category-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Category</p>
            <button className="delete" aria-label="close" onClick={toggleCategoryModal}></button>
          </header>
          <section className="modal-card-body">
            <form className="section container columns" onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="input"
                name="category"
                placeholder="e.g. DJ"
                value={categoryData.category}
                onChange={handleCategoryChange}
                errors={errorData}
              />
            </form>
                
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Submit</button>
            <button className="button" onClick={handleCategoryCancel}>Cancel</button>
          </footer>
        </div>
      </div>

      {/* Venue Modal */}
      <div className="modal" id="venue-modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Venue</p>
            <button className="delete" aria-label="close" onClick={toggleVenueModal}></button>
          </header>
          <section className="modal-card-body">
            <form className="section container columns" onSubmit={handleVenueSubmit}>
              <div className="column container">
                <div className="field is-two-fifths container">
                  <label className="label">Name</label>
                  <div className="control">
                    <input 
                      type="text" 
                      className="input"
                      name="name"
                      placeholder="e.g. Strongroom"
                      value={venueData.name}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div>

                <div className="field is-two-fifths container">
                  <label className="label">Address</label>
                  <div className="control">
                    <input 
                      type="text" 
                      className="input"
                      name="address"
                      placeholder="e.g. 120-124 Curtain Rd, Shoreditch, London EC2A 3SQ, UK"
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
                <div className="field is-two-fifths container">
                  <div className="control">
                    <ImageUploadField
                      value={venueData.venue_image}
                      name="venue_image"
                      handleImageUrl={handleImageUrl}
                    />
                  </div>
                </div>

                <div className="field is-two-fifths container">
                  <label className="label">Capacity</label>
                  <div className="control">
                    <input 
                      type="number" 
                      className="input"
                      name="capacity"
                      placeholder="e.g. 300"
                      value={venueData.capacity}
                      onChange={handleVenueChange}
                      errors={errorData}
                    />
                  </div>
                </div>


              </div>
            
            </form>
                
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Submit</button>
            <button className="button" onClick={handleVenueCancel}>Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AddEvent