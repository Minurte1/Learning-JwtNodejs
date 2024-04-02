import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import Users from '../components/ManageUsers/Users';
import Login from '../components/Login/Login';
import PrivateRoutes from './PrivateRoute';

const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/project" />
        <Route exact path="/login" element={<Login />} /> */}
        <PrivateRoutes path="/users" component={Users} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/users" element={<Users />} />
        {/* Các Route khác nếu cần */}
      </Routes>
    </>
  );
};
export default AppRoutes;
