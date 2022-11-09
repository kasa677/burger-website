import React from 'react'
import { useNavigate } from 'react-router-dom'
import {sna} from "./sna"
function Snacks() {
  console.log(sna)
const navigate=useNavigate()
  return (
    <>
    <h1 className='text-center'>Here is some Snacks</h1>
    
    <div className="row">
  

      
        
          {
            sna.map((item)=>{
              const{name ,ingeridients , img,price }=item;
              return(
                <div className="col-md-3">
                <div className="card">
                <div className="card-body">
                  <img src={img} width="100%"/>
                  <h3>Name:{name}</h3>
                  <h4>Price:{price}</h4>
                
                  <button className='btn btn-primary' onClick={()=>navigate("/snac")}>Book your snacks</button>
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

export default Snacks;