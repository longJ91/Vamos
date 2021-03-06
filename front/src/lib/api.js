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

export const postKakaoLogin = async (userId = '', kakaoName = '', email = '') => {
  return await API.post(`user/kakao-login`, {
    userId : userId,
    kakaoName : kakaoName,
    email : email,
  });
}

export const getDuplicateEmail = async (email = '') => {
  return await API.get(`user/duplicate-email?email=${email}`);
}

export const postSignUp = async (email = '', pwd = '', name = '') => {
  return await API.post(`user/sign-up`, {
    email : email,
    pwd: pwd,
    name: name
  });
}