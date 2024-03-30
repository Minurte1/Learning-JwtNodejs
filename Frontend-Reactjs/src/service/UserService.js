import axios from 'axios';

const registerNewUser = (email, phone, username, password) => {
  return axios.post('http://localhost:3003/api/v1/register', {
    email,
    phone,
    username,
    password,
  });
};
const LoginUser = (valueLogin, password) => {
  return axios.post('http://localhost:3003/api/v1/login', {
    valueLogin,
    password,
  });
};
export { registerNewUser, LoginUser };
