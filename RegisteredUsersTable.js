import React from 'react';
import './RegisteredUsersTable.css';

const RegisteredUsersTable = () => {
  
  const users = [
    { id: 1, name: 'pavan jadhav', email: 'pavanjadhav55@gmail.com', role: 'Admin' },
    { id: 2, name: 'Smith Abuj', email: 'Smithabuj2001@gmail.com', role: 'User' },
    { id: 3, name: 'ashok Pawar', email: 'Ashokpawar1999@gmail.com', role: 'Admin' },
    { id: 4, name: 'ekshaku giram', email: 'ekshakugiram2027@gmail.com', role: 'User' },
    { id: 5, name: 'Avdhut roy', email: 'avdhutroy15@gmail.com', role: 'User' },
    
    
  ];

  return (
    <div className="registered-users-table">
      <h2 className='aa'>Table showing Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsersTable;
