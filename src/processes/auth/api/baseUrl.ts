import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://drake-singular-severely.ngrok-free.app/swagger-ui/index.html#/',
});

export default instance;