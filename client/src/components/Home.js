/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getPayLoad } from './Helpers/auth'

const Home = () => {
  const [video, setVideo] = useState([
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638049351/sei_project_4/mixkit-crowd-jumping-at-the-concert-14084-medium_sv2u6t.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098038/sei_project_4/mixkit-aerial-view-of-a-nightclub-crowd-9586-medium_mvfwui.mp4',
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638098102/sei_project_4/mixkit-stage-of-an-electronic-music-festival-4188_jvbhlt.mp4'
  ])

  const [diceHeroVideo, setDiceHeroVideo] = useState([
    'https://res.cloudinary.com/dmpvulj3q/video/upload/v1638913977/sei_project_4/hero-video-desktop_gp1u9d.mp4'
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

  const userIsAuth = () => {
    // const payload = getPayLoad()
    // if (!payload) return false
    // // console.log('Payload ->', payload.sub > 1)
    // return payload.sub >= 0
    const payload = getPayLoad()
    // console.log(payload)
    // console.log(!payload)
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  // console.log('User is auth ->',userIsAuth())

  return (
    <>
      <div className='hero-container'>
        <div className='wrapper overlay'>
          <div className=''>
            {/* <video autoPlay muted loop poster className="hero-video" src={video[randomVideo()]}></video> */}
            <video
              autoPlay
              muted
              loop
              poster
              className='hero-video'
              src={diceHeroVideo[0]}
            ></video>
          </div>
        </div>
      </div>
      <div className='box-section'>
        <div className='left-box'>
          <div
            className='box-section-image'
            style={{ background: `url(${heroImage[0]})` }}
          ></div>
        </div>

        <div className='right-box'>
          {!userIsAuth() ? (
            <div className='container'>
              <h4>Join Festivents</h4>
              <h3>More than just events</h3>
              <p>For the world’s best venues and events</p>
              <Link to='/register'>
                <button className='button is-medium is-dark button-spacing'>
                  Join now
                </button>
              </Link>
            </div>
          ) : (
            <div className='container'>
              <h4>Create an event</h4>
              <h3>More than just events</h3>
              <p>For the world’s best venues and events</p>
              <Link to='/events/new'>
                <button className='button is-medium is-dark button-spacing'>
                  Create an event
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className='box-section'>
        <div className='right-box'>
          <div className='container'>
            <h3>Check out our events</h3>
            <p>Thinking of putting on an event?</p>
            <Link to='/events'>
              <button className='button is-medium is-dark button-spacing'>
                View Events
              </button>
            </Link>
          </div>
        </div>
        <div className='left-box'>
          <video
            autoPlay
            muted
            loop
            poster
            className='box-video'
            src={boxVideo[0]}
          ></video>
        </div>
      </div>
      <div className='section'></div>
    </>
  )
}

export default Home
