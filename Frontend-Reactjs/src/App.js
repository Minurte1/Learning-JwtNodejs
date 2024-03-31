import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/ManageUsers/Users';
import _ from 'lodash';
import Nav from './components/Nav/Nav';
function App() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <Router>
      <div className="as">
        {/* {account && !_.isElement(account) && account.isAuthenticated && <Nav />} */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/users" element={<Users />} />
          {/* Các Route khác nếu cần */}
        </Routes>
        <ToastContainer position="top-left" autoClose={3000} draggable />{' '}
      </div>
    </Router>
  );
}

export default App;
