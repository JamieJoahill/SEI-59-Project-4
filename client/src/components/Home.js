/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [video, setVideo] = useState([
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638049351/sei_project_4/mixkit-crowd-jumping-at-the-concert-14084-medium_sv2u6t.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098038/sei_project_4/mixkit-aerial-view-of-a-nightclub-crowd-9586-medium_mvfwui.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098102/sei_project_4/mixkit-stage-of-an-electronic-music-festival-4188_jvbhlt.mp4'
  ])

  const [heroImage, setHeroImage] = useState([
    'https://res.cloudinary.com/dmpvulj3q/image/upload/v1638735384/sei_project_4/work-with-partners-2_y7alfi.jpg'
  ])

  const [boxVideo, setBoxVideo] = useState([
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638740658/sei_project_4/Pexels_Videos_2022396_nupooi.mp4'
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
          <div className="box-section-image" style={{ background: `url(${heroImage[0]})` }}></div>
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
          <div className="container">
            <h3>Check out our events</h3>
            <p>Thinking of putting on an event?</p>
            <Link to="/events"><button className="button is-medium is-dark">View Events</button></Link>
          </div>
        </div>
        <div className="left-box">
          <video autoPlay muted loop poster className="box-video" src={boxVideo[0]}></video>
        </div>
      </div>
      <div className="section">

      </div>
      
    </>
  )
}

export default Home