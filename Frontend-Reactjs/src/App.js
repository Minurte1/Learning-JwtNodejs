import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('check')
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* Các Route khác nếu cần */}
      </Switch>
    </Router>
  );
}

export default App;
