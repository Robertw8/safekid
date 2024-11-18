import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://safekid-163771212.eu-north-1.elb.amazonaws.com',
});

export default instance;
