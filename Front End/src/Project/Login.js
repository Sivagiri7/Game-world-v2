import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import jm from "./image/jm.png"; 

function Login() {
  const [flipped, setFlipped] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const toggleFlip = () => {
    setFlipped(!flipped);
    setForm({ name: '', email: '', password: '' });
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:9090/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('user', JSON.stringify(data));
        if (data.role === 'ADMIN') navigate('/admin');
        else navigate('/main');
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:9090/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Registered successfully!");
        setFlipped(false);
      } else {
        alert("Register failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "40px 0" }}>
    <div className="login-register-wrapper">
      <div className={`flip-box ${flipped ? 'flipped' : ''}`}>

        {/* FRONT SIDE - Login */}
        <div className="flip-side front-side">
          <img src="https://freepngimg.com/thumb/battlefield_hardline/90085-battlefield-soldier-army-free-transparent-image-hq.png" alt="Login" />
          <div className="form-side">
            <h2>Please Login Soldier !</h2>
            <form onSubmit={handleLogin}>
              <input id="log" name="email" placeholder="Email" onChange={handleChange} required />
              <input id="log" name="password" type="password" placeholder="Password" onChange={handleChange} required />
              <button id="log_button"type="submit">Login</button>
            </form>
            <p id="logtext"onClick={toggleFlip}>Don't have an account? <span id="logtext_two">Register here</span></p>
          </div>
        </div>

        <div className="flip-side back-side">
          <img src={jm} alt="Register" />
          <div className="form-side">
            <h2>Became a Soldier</h2>
            <form onSubmit={handleRegister}>
              <input id="log" name="name" placeholder="Name" onChange={handleChange} required />
              <input id="log" name="email" placeholder="Email" onChange={handleChange} required />
              <input id="log" name="password" type="password" placeholder="Password" onChange={handleChange} required />
              <button id="log_button" type="submit">Register</button>
            </form>
            <p id="logtext" onClick={toggleFlip}>Already have an account? <span id="logtext_two">Login here</span></p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Login;