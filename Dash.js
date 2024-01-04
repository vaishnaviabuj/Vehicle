import React from 'react';
import { Link } from 'react-router-dom';
import './Dash.css';
function Dash() {
  return (
    
    <div className="">
        <ul className="aaa">
          <li className=''>
            <Link to="/VehiclesCar"> Dashboard (Admin Login) </Link>
          </li>
          <li>
            <Link to="/ProfilePage"> Profile Page</Link>
          </li>
         
        </ul>
        
        </div>
  )
}

export default Dash
