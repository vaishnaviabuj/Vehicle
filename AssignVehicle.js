
import React, { useEffect, useState } from 'react';
import './AssignVehicle.css';

function AssignVehicle() {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [users, setUsers] = useState([]);
  const [assignedUser, setAssignedUser] = useState('');

  
  const vehicles = [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
    { id: 3, name: 'Car 3' },
    { id: 4, name: 'Car 4' },
    { id: 5, name: 'Car 5' },
    
    
  ];

  
  const initialUsers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    
  ];

  useEffect(() => {
   
    setUsers(initialUsers);
  }, []);

  const handleAssignVehicle = () => {
   
    console.log(`Assigned vehicle ${selectedVehicle} to user ${assignedUser}`);
  };

  return (
    <div className="assign-vehicle-form">
      <h2>Assign Vehicle</h2>
      <div className="vehicle-dropdown">
        <label>Select Vehicle:</label>
        <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
          <option value="">Select</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.name}>
              {vehicle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="user-dropdown">
        <label>Select User:</label>
        <select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)}>
          <option value="">Select</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignVehicle}>Assign</button>
    </div>
  );
}

export default AssignVehicle;
