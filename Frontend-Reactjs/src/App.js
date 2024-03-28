import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  console.log('check')
  return (
    <Router>
 <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* Các Route khác nếu cần */}
      </Switch>
   
    
      <ToastContainer
    position="top-left"
    autoClose={3000}
    draggable
  />

    </Router>
  );
}

export default App;
