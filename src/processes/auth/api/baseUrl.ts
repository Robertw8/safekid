import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://drake-singular-severely.ngrok-free.app/',
});

export default instance;
