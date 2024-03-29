import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* Các Route khác nếu cần */}
      </Routes>

      <ToastContainer position="top-left" autoClose={3000} draggable />
    </Router>
  );
}

export default App;
