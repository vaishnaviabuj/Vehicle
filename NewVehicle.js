// NewVehicle.js

import React, { useState } from 'react';
import './NewVehicle.css';

function NewVehicle() {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
   
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicleInfo({ ...vehicleInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitted:', vehicleInfo);
  };

  return (
    <div className="new-vehicle-form">
      <h2>Create New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={vehicleInfo.make}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={vehicleInfo.model}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={vehicleInfo.year}
            onChange={handleInputChange}
          />
        </label>
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewVehicle;
