import React, { useState } from 'react';
import './ModifyName.css';

const ModifyName = () => {
  const [name, setName] = useState(''); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Updated name:', name);
    setName(''); 
  };

  return (
    <div className="modify-name-form">
      <h2>Modify Name</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">New Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your new name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ModifyName;
