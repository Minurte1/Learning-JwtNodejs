import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import _ from 'lodash';
import Nav from './components/Nav/Nav';
import AppRoutes from './routers/AppRouters';
function App() {
  const [account, setAccount] = useState({});
  // useEffect(() => {
  //   let session = sessionStorage.getItem('account');
  //   if (session) {
  //     setAccount(JSON.parse(session));
  //   }
  // }, []);
  return (
    <Router>
      <div className="app-header">
        <Nav />
      </div>
      <div className="as">
        {account && !_.isElement(account) && account.isAuthenticated && <Nav />}
        <AppRoutes />
        <ToastContainer position="top-left" autoClose={3000} draggable />
      </div>
    </Router>
  );
}

export default App;
