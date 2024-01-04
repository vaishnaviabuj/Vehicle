import React, { useEffect, useState } from 'react';
import './RemoveAssignedVehicle.css';

function RemoveAssignedVehicle() {
  const [assignedVehicles, setAssignedVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  
  const initialAssignedVehicles = [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
    { id: 3, name: 'Car 3' },
    { id: 4, name: 'Car 4' },
    { id: 5, name: 'Car 5' },
  ];

  useEffect(() => {
    
    setAssignedVehicles(initialAssignedVehicles);
  }, []);

  const handleRemoveAssignedVehicle = (e) => {
    e.preventDefault();
    // Logic to remove selectedVehicle from assignedVehicles
    const updatedAssignedVehicles = assignedVehicles.filter(
      (vehicle) => vehicle.name !== selectedVehicle
    );
    setAssignedVehicles(updatedAssignedVehicles);
    console.log(`Removed vehicle ${selectedVehicle} from assigned vehicles`);
  };

  return (
    <div className="remove-assigned-vehicle-form">
      <h2>Remove Assigned Vehicle</h2>
      <form onSubmit={handleRemoveAssignedVehicle}>
        <div className="vehicle-dropdown">
          <label>Select Assigned Vehicle:</label>
          <select
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            <option value="">Select</option>
            {assignedVehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.name}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Remove</button>
      </form>
    </div>
  );
}

export default RemoveAssignedVehicle;
