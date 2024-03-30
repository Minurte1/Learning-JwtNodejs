import express from 'express';

import apiController from '../homeController/apiController';
import {
  testApi,
  handleRegister,
  handleLogin,
} from '../homeController/apiController';
const router = express.Router();

const initApiRouter = (app) => {
  //rest api
  //GET -R, POST -C, PUT -U, DELETE -D
  router.get('/test-api', testApi);
  router.post('/register', handleRegister);
  router.post('/login', handleLogin);
  return app.use('/api/v1', router);
};
export default initApiRouter;
