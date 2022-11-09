import React from 'react'
import { useNavigate } from 'react-router-dom';

function Feauter() {
  const navigate=useNavigate()
  return (
    <>
    <div className="feature">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="section-header">
          <p>Why Choose Us</p>
          <h2>Our Key Features</h2>
        </div>
        <div className="feature-text">
          <div className="feature-img">
            <div className="row">
              <div className="col-6">
                <img src="img/feature-1.jpg" alt="Image" />
              </div>
              <div className="col-6">
                <img src="img/feature-2.jpg" alt="Image" />
              </div>
              <div className="col-6">
                <img src="img/feature-3.jpg" alt="Image" />
              </div>
              <div className="col-6">
                <img src="img/feature-4.jpg" alt="Image" />
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consec adipis elit. Phasel nec preti mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor, auctor id gravida condime, viverra quis sem. Curabit non nisl nec nisi sceleri maximus 
          </p>
          <button className="btn custom-btn" onClick={()=>navigate("/booking")}>Book A Table</button>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-cooking" />
              <h3>World’s best Chef</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-vegetable" />
              <h3>Natural ingredients</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-medal" />
              <h3>Best quality products</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-meat" />
              <h3>Fresh vegetables &amp; Meet</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-courier" />
              <h3>Fastest door delivery</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="feature-item">
              <i className="flaticon-fruits-and-vegetables" />
              <h3>Ground beef &amp; Low fat</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Feauter;