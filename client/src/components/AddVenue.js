/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from './ImageUploadField'
import { headers } from '../lib/headers'

const AddVenue = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    venue_image: '',
    capacity: '',
  })

  const [errorData, setErrorData] = useState({
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/venues/', JSON.stringify(formData), headers)
    } catch (err) {
      console.log('Form Submit Error - >', err)
      setErrorData(err)
    }
  }

  return (
    <div className="form-wrapper">
      <form className="section container columns" onSubmit={handleSubmit}>
        <div className="column is-two-fifths container">

          <div className="field is-two-fifths container">
            <label className="label">Name</label>
            <div className="control">
              <input 
                type="text" 
                className="input" 
                placeholder="Venue Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                placeholder="e.g. "
                name="address"
                value={formData.address}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>
          

          <div className="field is-two-fifths container">
            <div className="control">
              <ImageUploadField
                value={formData.venue_image}
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
                value={formData.capacity}
                onChange={handleChange}
                errors={errorData}
              />
            </div>
          </div>

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
    </div>
  )
}

export default AddVenue