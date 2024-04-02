import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const PrivateRoutes = (props) => {
  useEffect(() => {});
  return (
    <>
      <Route path={props.path} element={props.component} />
    </>
  );
};
export default PrivateRoutes;
