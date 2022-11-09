import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Menu() {
    const navigate=useNavigate()
  return (
    
    <>
    
  <div className="menu">
  <div className="container">
    <div className="section-header text-center">
      <p>Food Menu</p>
      <h2>Delicious Food Menu</h2>
      <img src='https://img.freepik.com/free-vector/fast-food-black-background-poster_1284-14589.jpg'/>
    </div>
    <div className="menu-tab">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <button className="nav-link active" data-toggle="pill" onClick={()=>navigate("/burge")} >Burgers</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" onClick={()=>navigate("/snacks")}>Snacks</a>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-toggle="pill"onClick={()=>navigate("/cocktail")}>Beverages</button>
        </li>
      </ul>

    </div>
  </div>
</div>

    </>
  )
}

export default Menu;