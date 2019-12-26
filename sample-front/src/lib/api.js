import axios from 'axios';

const API = axios.create({
  baseURL: `http://localhost:8000/`
});

export const getTest = async (email = 'wlwjdgks123@gmail.com', pwd = '1234') => {
  return await API.get(`user/info?id=1`);
}

export const postLogin = async (email = '', pwd = '') => {
  return await API.post(`user/login`, {
    email : email,
    pwd: pwd
  });
}