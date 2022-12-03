import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [empID, setEmpID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  const registerEmployee = () => {
    axios
      .post("http://localhost:3001/register", {
        empID: empID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        username: username,
        password: password,
        role: role,
        department: department,
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <div className="App">
      <div className="form">
        <div className="form-header">Create Account</div>
        <form>
          <div className="input-container">
            <input
              name="empID"
              type="text"
              placeholder="Employee ID"
              onChange={(e) => {
                setEmpID(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              name="password"
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="dropdownContainer">
            <div className="input-container">
              <label>Select Role</label>
              <select
                className="role"
                name="accountType"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="Manager">Manager</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
            <div className="input-container">
              <label>Select Department</label>
              <select
                className="department"
                name="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option value="Research and Development">
                  Research and Development
                </option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="IT Support">IT Support</option>
              </select>
            </div>
          </div>
          <button className="submit-btn" onClick={registerEmployee}>
            Submit
          </button>
        </form>
      </div>
      <div className="inputData">
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>
        <h3>{phoneNumber}</h3>
        <h3>{empID}</h3>
        <h3>{username}</h3>
        <h3>{password}</h3>
        <h3>{role}</h3>
        <h3>{department}</h3>
      </div>
    </div>
  );
}

export default App;
