import React from 'react';
import { Link } from 'react-router-dom';
import './VehiclesCar.css';
function VehiclesCar() {
  return (
    
    <div className="">
        <ul className="aaa">
          <li className=''>
            <Link to="/new-vehicle">Create New Vehicle</Link>
          </li>
          <li>
            <Link to="/modify-vehicle">Modify Vehicle</Link>
          </li>
          <li>
            <Link to="/assign-vehicle">Assign Vehicle</Link>
          </li>
          <li>
            <Link to="/remove-assigned-vehicle">Remove Assigned Vehicle</Link>
          </li>
          <li>
            <Link to="/registered-users">Table showing Registered Users</Link>
          </li>
          <li>
            <Link to="/registered-vehicles">Table showing Registered Vehicles</Link>
          </li>
        </ul>
        </div>
  )
}

export default VehiclesCar
