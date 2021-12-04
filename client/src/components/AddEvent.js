import React, { useState } from 'react'

const AddEvent = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    photo: '',
    location: '',
    start_time: '',
    finish_time: '',
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


  return (
    <form className="section container columns">

      <div className="column is-two-fifths container">

        <div className="field is-two-fifths container">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" className="input" placeholder="Event title"/>
          </div>
        </div>

        <div className="field is-two-fifths container">
          <label className="label">Description</label>
          <div className="control">
            <input type="text" className="input" placeholder="Event title"/>
          </div>
        </div>

        {/* Date */}
        <div className="field is-two-fifths container">
          <label className="label">Date</label>
          <div className="control">
            <input type="date" className="input"/>
          </div>
        </div>

        {/* Photo Upload */}

        {/* Location */}
        <div className="field is-two-fifths container">
          <label className="label">Location</label>
          <div className="control">
            <input type="text" className="input" placeholder="e.g. Shoreditch, London"/>
          </div>
        </div>

        {/* Start time */}
        <div className="field is-two-fifths container">
          <label className="label">Start Time</label>
          <div className="control">
            <input type="time" className="input"/>
          </div>
        </div>

        {/* Finish time */}

        {/* Category */}
        <div className="field is-two-fifths container">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select>
                <option value="">Select Category</option>
                <option value="">DJ</option>
                <option value="">Open mic</option>
                <option value="">Gigs</option>
                <option value="">Festival</option>
              </select>
            </div>
          </div>
        </div>


        {/* Venue */}



      </div>


    </form>
  )
}

export default AddEvent