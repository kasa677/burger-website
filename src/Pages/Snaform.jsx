import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from "formik"
function Snaform() {
 const Formik=useFormik({
  
  onSubmit:(value)=>{
    console.log(value);
  }
 })
 console.log(Formik)
    const[ formValue , setFormValue]=useState({
        fname:"",
        price:"",
        dname:"",
    })
    const [table ,setTable]=useState([])
    function handleChange(e){
        const{name,value}=e.target
        setFormValue({...formValue,[name]:value})
        console.log(formValue);
    }
    function handleSubmit(e){
        e.preventDefault();
        setTable([...table, formValue])
        setFormValue({fname:"",dname:"",price:""})
        console.log(table)
     notify()
    }
    const notify = () => toast("Thank you for book the order just few minute wait!");
  return (
    <>
    
    <div className="container">
        <ToastContainer/>
    <h1 className='text-center'>Please Book Your  Favorite Snacks </h1>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlYONGhiVE9SQIocnPoEssrDGGJXL5Jks2T-Wn65T&s' width="100%"/>
    <form action="" >
        <div className="col-md-6 shadow offset py-5">
        <input type="text"
         placeholder='Full-Name'
          className='form-control my-4'
          name='fname'
          value={formValue.fname}
          onChange={handleChange}
           />
            <input type="text"
         placeholder='Which type drink'
          className='form-control my-4'
          name='dname'
          value={formValue.dname}
          onChange={handleChange}
           />
             <input type="text"
         placeholder='How many glass'
          className='form-control my-4'
          name='price'
          value={formValue.price}
          onChange={handleChange}
           />
           <button className='btn btn-primary' onClick={handleSubmit}>Book your order</button>
    
           
           </div>
    </form>
    </div>
    </>
  )
}

export default Snaform;