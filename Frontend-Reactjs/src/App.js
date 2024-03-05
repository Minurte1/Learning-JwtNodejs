import Login from "./components/Login/Login";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('check')
  return (
    <>
      <Router>
        <Nav></Nav>
        <div className="app-container">

          <Switch>
            <Route path="/">
              home
            </Route>

            <Route path="/about">
              about
            </Route>

            <Route path="/login">
              <Login></Login>
              gê
            </Route>

            <Route path="/news">
              newss
            </Route>

            <Route path="/contact">
              contacts
            </Route>

            <Route path="*">
              404 Not Found
            </Route>
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
