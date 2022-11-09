import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const[formValue , setFormValue]=  useState({
    fname:"",
    email:"",
    mobile:"",
    date:"",
    time:"",
    person:""
  })
  const[data , setData]=useState([])
  function handleChange(e){
    const{value , name}=e.target;
    setFormValue({...formValue , [name]:value})
    console.log(formValue);
  }
  function handleSubmit(e){
    e.preventDefault();
    setData([...data , formValue])
    setFormValue({fname:"",email:"",mobile:"",date:"",time:"",person:""})
    console.log(data)
  notify()
  
  }
  
  const notify = () => toast("Your table is booked!");
  return (
    <>
    <div className="booking">
  <div className="container">
  <ToastContainer />
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="booking-content">
          <div className="section-header">
            <p>Book A Table</p>
            <h2>Book Your Table For Private Dinners &amp; Happy Hours</h2>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="booking-form">
          <form>
            <div className="control-group">
              <div className="input-group">
                <input type="text"
                 className="form-control"
                  placeholder="Name"
                   required="required"
                   name='fname'
                   value={formValue.fname}
                   onChange={handleChange} />
                <div className="input-group-append">
                  <div className="input-group-text"><i className="far fa-user" /></div>
                </div>
              </div>
            </div>
            <div className="control-group">
              <div className="input-group">
                <input type="email" 
                className="form-control"
                 placeholder="Email" 
                 required="required"
                 name='email'
                 value={formValue.email}
                 onChange={handleChange} />
                <div className="input-group-append">
                  <div className="input-group-text"><i className="far fa-envelope" /></div>
                </div>
              </div>
            </div>
            <div className="control-group">
              <div className="input-group">
                <input type="number"
                 className="form-control"
                  placeholder="Mobile"
                   required="required"
                   name='mobile'
                   value={formValue.mobile}
                   onChange={handleChange} />
                <div className="input-group-append">
                  <div className="input-group-text"><i className="fa fa-mobile-alt" /></div>
                </div>
              </div>
            </div>
            <div className="control-group">
              <div className="input-group date" id="date" data-target-input="nearest">
                <input type="text"
                 className="form-control datetimepicker-input" 
                 placeholder="Date"
                  data-target="#date"
                   data-toggle="datetimepicker"
                   name='date'
                   value={formValue.date}
                   onChange={handleChange} />
                <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                  <div className="input-group-text"><i className="far fa-calendar-alt" /></div>
                </div>
              </div>
            </div>
            <div className="control-group">
              <div className="input-group time" id="time" data-target-input="nearest">
                <input type="text"
                 className="form-control datetimepicker-input"
                  placeholder="Time"
                   data-target="#time"
                    data-toggle="datetimepicker"
                    name='time'
                    value={formValue.time}
                    onChange={handleChange} />
                <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                  <div className="input-group-text"><i className="far fa-clock" /></div>
                </div>
              </div>
            </div>
            <div className="control-group">
              <div className="input-group">
                <input type="number"
                 className="form-control"
                  placeholder="How many person"
                   required="required"
                   name='person'
                   value={formValue.person}
                   onChange={handleChange} />
                <div className="input-group-append">
                  <div className="input-group-text"><i className="fa fa-mobile-alt" /></div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn custom-btn" type="submit" onClick={handleSubmit}>Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Booking;