import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import Usestate from './Usestate'
import Main from './Project/main';
import AdminPanel from './Project/AdminPanel';
import Login from './Project/Login';

import Secure from './Project/Secure';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Main/>
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPanel />}
      />
    </Routes>
  </Router> 
);

reportWebVitals();