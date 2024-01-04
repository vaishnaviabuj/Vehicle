import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    repassword:"",
    mobile: "",
    gender: "male", 
  });

  const [formErrors, setFormErrors] = useState({}); // State for form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const errors = {};

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(formData.password)) {
    errors.password = "Password must contain at least 8 characters, including one special character and one digit";
  }
    if (formData.password !== formData.repassword) {
      errors.password = "Passwords do not match";
    }
  

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      
      console.log("Form submitted:", formData);
      navigate('/Dash');
    }
  };

 
  return (
    <div className="main">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your Name"
          required
          value={formData.first}
          onChange={handleChange}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.third}
          onChange={handleChange}
        />

        <label for="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          placeholder="Enter your DOB"
          required
          value={formData.four}
          onChange={handleChange}
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
          required
         
          value={formData.five}
          onChange={handleChange}
        />
        <label for="repassword">Re-type Password:</label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          placeholder="Re-Enter your password"
          required
          //<span id="pass"></span>

          value={formData.ten}
          onChange={handleChange}
        />
        <label for="mobile">Contact:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter your Mobile Number"
          required
          maxlength="10"
          value={formData.six}
          onChange={handleChange}
        />
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div className="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Not registered?
        <a href="Login" style={{ textDecoration: 'none' }}>
          Login
        </a>
      </p>
    </div>
  );
};

export default RegistrationForm;
