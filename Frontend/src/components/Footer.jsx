import React from 'react'
import tag from '../assets/tag.png'


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="links">
          <div className="column">
            <h3>Abstract</h3>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div className="column">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="column">
            <h3>Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>
                <strong>Contact Us</strong>
                <a href="mailto:info@abstract.com">info@abstract.com</a>
              </li>
            </ul>
          </div>
          <div className="column copyright-column">
            <div className="spacer">
              <img src={tag} alt="" />
            </div>

            <p>© Copyright 2022 <br />
              Abstract Studio Design, Inc. <br />
              All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
