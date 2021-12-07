/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    // console.log('Data ->', data)
    // console.log('Data file', data.file)
    const response = await axios.post(uploadUrl, data)
    handleImageUrl(response.data.url)
    console.log('Response ->', response)
  }

  return (
    <div className="field is-two-fifths container">
      <label>Upload Image</label>
      <div className="control">
        <input
          type="file"
          onChange={handleUpload}
        />
      </div>
    </div>
  )
}