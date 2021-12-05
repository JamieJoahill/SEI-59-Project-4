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
    category: {
      category: '',
    },
    venue: {
      name: '',
      address: '',
      venue_image: '',
      capcity: '',
    },
  })

  const [errorData, setErrorData] = useState({
    title: '',
    description: '',
    date: '',
    photo: '',
    location: '',
    start_time: '',
    finish_time: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, photo: url })
  }

  console.log('formData ->', JSON.stringify(formData))

  console.log('errorData ->', errorData)

  console.log('headers->', headers)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/events/', JSON.stringify(formData), headers)
    } catch (err) {
      console.log('Form Submit Error - >', err)
      setErrorData(err)
    }
  }


  return (
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

        {/* <div className="field is-two-fifths container">
          <label className="label">Description</label>
          <div className="control">
            <input 
              type="text" 
              className="input" 
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              errors={errorData}
            />
          </div>
        </div> */}

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
          </div>
        </div>


        {/* Venue */}

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button">Cancel</button>
          </div>
        </div>



      </div>


    </form>
  )
}

export default AddEvent