import axios from 'axios';

export const getTest = async (email = 'wlwjdgks123@gmail.com', pwd = '1234') => {
  return await axios.get(`http://localhost:8000/user/info?id=1`);
}

export const postLogin = async (email = '', pwd = '') => {
  return await axios.post(`http://localhost:8000/user/login`, {
    email : email,
    pwd: pwd
  });
}