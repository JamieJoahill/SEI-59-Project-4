/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="custom-footer footer">
      <div className="main-container">
        <div className="logo">
          <div id='black-square'></div>
        </div>
        <div className="nice">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>DICE</h6>
            <ul className="ul-footer-elements">
              <li>About</li>
              <li>Jobs</li>
              <li>Diversity, Equity & Inclusion</li>
              <li>Press</li>
            </ul>
          </div>

        </div>
        <div className="work-with-us">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>work with us</h6>
            <ul className="ul-footer-elements">
              <li>Artists</li>
              <li>Venues</li>
              <li>Promoters</li>
            </ul>
          </div>
        </div>
        <div className="support">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>Support</h6>
            <ul className="ul-footer-elements">
              <li>COVID Update</li>
              <li>Help Centre</li>
            </ul>
          </div>
        </div>
        <div className="download">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>Download</h6>
            <ul className="ul-footer-elements">
              <li>Android</li>
              <li>iOS</li>
            </ul>
          </div>
        </div>
        <div className="follow">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>Follow</h6>
            <ul className="ul-footer-elements">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="browse">
          <div className="footer-header">
            <h6 className='mb-5 has-text-black'>Browse</h6>
            <ul className="ul-footer-elements">
              <li>Artists</li>
              <li>Venues</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line footer-line"></div>
    </div>
  )
}

export default Footer