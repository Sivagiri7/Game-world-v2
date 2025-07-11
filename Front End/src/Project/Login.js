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
      const res = await fetch('https://game-world-v2-w7e4.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();

      if (!data || !data.role) {
        alert("Login failed.Check Your Email or Password");
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      if (data.role === 'ADMIN') navigate('/admin');
      else navigate('/main');

    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://game-world-v2-w7e4.onrender.com/api/auth/register', {
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
                <input id="log" name="email" placeholder="Email" type='email' onChange={handleChange} required />
                <input id="log" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button id="log_button" type="submit">Login</button>
              </form>
              <p id="logtext" onClick={toggleFlip}>Don't have an account? <span id="logtext_two">Register here</span></p>
            </div>
          </div>

          {/* BACK SIDE - Register */}
          <div className="flip-side back-side">
            <img src={jm} alt="Register" />
            <div className="form-side">
              <h2>Became a Soldier</h2>
              <form onSubmit={handleRegister}>
                <input id="log" name="name" placeholder="Name" onChange={handleChange} required />
                <input id="log" name="email" type='email' placeholder="Email" onChange={handleChange} required />
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
