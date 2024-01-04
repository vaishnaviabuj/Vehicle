import React from 'react';
import './RegisteredVehiclesTable.css'; // Import your CSS file

const RegisteredVehiclesTable = () => {
  const vehicles = [
    { id: 1, type: 'SUV', model: 'Toyota RAV4', year: 2022 },
    { id: 2, type: 'Sedan', model: 'Honda Accord', year: 2020 },
    { id: 3, type: 'Truck', model: 'Ford F-150', year: 2021 },
    { id: 4, type: 'Hatchback', model: 'Volkswagen Golf', year: 2019 },
    { id: 5, type: 'Convertible', model: 'Mazda MX-5', year: 2023 },
    { id: 6, type: 'Coupe', model: 'BMW 4 Series', year: 2022 },
  ];

  return (
    <div className="registered-vehicles-table">
      <h2 className='aa'>Table showing Registered Vehicles</h2>
      <table className="vehicles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredVehiclesTable;
