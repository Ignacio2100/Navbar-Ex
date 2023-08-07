import { useState } from "react";
import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Error: Validación de Datos");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (inputPassword) => {
    if (inputPassword.length > 5) {
      setMessage("Autorizado");
    } else {
      setMessage("Error: Validación de Datos");
    }
  };

  const handleChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <form className="card">
        <h2>Ingrese la Contraseña: </h2>
        <br></br>
        <div className="password-input">
          <input
            type={showPassword ? "number" : "password"}
            value={password}
            onChange={handleChange}
          />
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <h2>{message}</h2>
      </form>
    </div>
  )
}

export default Login;
