import React from 'react'
import {bur} from"./bur"
import {useNavigate} from "react-router-dom"
function Burge() {
  console.log(bur)
  const navigate=useNavigate()
  return (
    <>
    <h1 className='text-center'>Here is some Burger list </h1>
    
    <div className="row">
  

      
        
          {
            bur.map((item)=>{
              const{id,name , img,price }=item;
              return(
                <div className="col-md-3">
                <div className="card">
                <div className="card-body">
                  <img src={img} width="100%"/>
                  <h3>Name:{name}</h3>
                  <h4>Price:{price}</h4>
                  
                  <button className='btn btn-primary' onClick={()=>navigate("/bur")}>Book your burger</button>
                </div>
                </div>
                </div>
              )
            })
          }
          <button className="btn btn-primary" onClick={()=>navigate("/menu")}>back To menu</button>
        </div>
    
  

        
    </>
  )
}

export default Burge;