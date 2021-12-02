/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [video, setVideo] = useState([
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638049351/sei_project_4/mixkit-crowd-jumping-at-the-concert-14084-medium_sv2u6t.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098038/sei_project_4/mixkit-aerial-view-of-a-nightclub-crowd-9586-medium_mvfwui.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098102/sei_project_4/mixkit-stage-of-an-electronic-music-festival-4188_jvbhlt.mp4'
  ])

  const randomVideo = () => {
    return Math.floor(Math.random() * video.length)
  }

  return (
    <>
      <div className="hero-container">

        <div className="wrapper">
          <div className="overlay"></div>
          <div className="gradient">
            <video autoPlay muted loop poster className="hero-video" src={video[randomVideo()]}></video>
          </div>
        </div>

        <section className="hero container">
          <h2>Explore our events</h2>
          <h3>Create your event</h3>
        </section>
      </div>

      <div className="box-section">
        <div className="left-box">

        </div>

        <div className="right-box">
          <div className="container">
            <h4>Join Festivents</h4>
            <h3>More than just events</h3>
            <p>For the world’s best venues and festivals</p>
            <Link to="/register"><button className="button is-medium is-dark">Join now</button></Link>
          </div>
        </div>

      </div>

      <div className="box-section">
        <div className="right-box">

        </div>
        <div className="left-box">

        </div>
      </div>
      <div className="section">

      </div>
      
    </>
  )
}

export default Home