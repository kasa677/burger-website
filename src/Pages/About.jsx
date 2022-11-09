import React from 'react'

function About() {
  return (
<>
<div className="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="about-img">
          <img src="img/about.jpg" alt="Image" />
          <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
            <span />
          </button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content">
          <div className="section-header">
            <p>About Us</p>
            <h2>Cooking Since 1990</h2>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
            </p>
            <a className="btn custom-btn" href>Book A Table</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default About;