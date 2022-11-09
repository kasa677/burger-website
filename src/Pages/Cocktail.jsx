import React from 'react'
import {cock} from "./cock"
import {useNavigate} from "react-router-dom"
function Cocktail() {
  console.log(cock)
  const navigate=useNavigate()
  return (
    <>
    <h1 className='text-center'>Here is some Juice drink</h1>
    
    <div className="row">
  

      
        
          {
            cock.map((item)=>{
              const{name ,ingeridients , img,price }=item;
              return(
                <div className="col-md-3">
                <div className="card">
                <div className="card-body">
                  <img src={img} width="100%"/>
                  <h3>Name:{name}</h3>
                  <h4>Price:{price}</h4>
                  <p>ingeridients:{ingeridients}</p>
                  <button className='btn btn-primary' onClick={()=>navigate("/cock")}>Book your drink</button>
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

export default Cocktail;