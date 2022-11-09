import React from 'react'

function Team() {
  return (
    <>
   <div className="team">
  <div className="container">
    <div className="section-header text-center">
      <p>Our Team</p>
      <h2>Our Master Chef</h2>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="team-item">
          <div className="team-img">
            <img src="img/team-1.jpg" alt="Image" />
            <div className="team-social">
              <a href><i className="fab fa-twitter" /></a>
              <a href><i className="fab fa-facebook-f" /></a>
              <a href><i className="fab fa-linkedin-in" /></a>
              <a href><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="team-text">
            <h2>Adam Phillips</h2>
            <p>CEO, Co Founder</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="team-item">
          <div className="team-img">
            <img src="img/team-2.jpg" alt="Image" />
            <div className="team-social">
              <a href><i className="fab fa-twitter" /></a>
              <a href><i className="fab fa-facebook-f" /></a>
              <a href><i className="fab fa-linkedin-in" /></a>
              <a href><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="team-text">
            <h2>Dylan Adams</h2>
            <p>Master Chef</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="team-item">
          <div className="team-img">
            <img src="img/team-3.jpg" alt="Image" />
            <div className="team-social">
              <a href><i className="fab fa-twitter" /></a>
              <a href><i className="fab fa-facebook-f" /></a>
              <a href><i className="fab fa-linkedin-in" /></a>
              <a href><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="team-text">
            <h2>Jhon Doe</h2>
            <p>Master Chef</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="team-item">
          <div className="team-img">
            <img src="img/team-4.jpg" alt="Image" />
            <div className="team-social">
              <a href><i className="fab fa-twitter" /></a>
              <a href><i className="fab fa-facebook-f" /></a>
              <a href><i className="fab fa-linkedin-in" /></a>
              <a href><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="team-text">
            <h2>Josh Dunn</h2>
            <p>Master Chef</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Team;