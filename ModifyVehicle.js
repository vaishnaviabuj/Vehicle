
import React, { useEffect, useState } from 'react';
import './ModifyVehicle.css';

function ModifyVehicle() {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
   
  });

 
  const initialVehicleData = {
    make: '',
    model: '',
    year: '',
   
  };

  useEffect(() => {
   
    setVehicleInfo(initialVehicleData);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicleInfo({ ...vehicleInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log('Modified Vehicle:', vehicleInfo);
  };

  return (
    <div className="modify-vehicle-form">
      <h2>Modify Vehicle</h2>
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
    
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ModifyVehicle;
