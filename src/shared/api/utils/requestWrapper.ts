import axios, { type AxiosRequestConfig } from 'axios';

interface RequestWrapperParams {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  // data?: { [key: string]: unknown } | unknown;

  data?: object; // !
  config?: AxiosRequestConfig;
  params?: {
    [k: string]: string;
  };
}

const axiosInstance = axios.create({
  baseURL: 'https://drake-singular-severely.ngrok-free.app', // !
});

const requestWrapper = async (
  { method, url, data, config }: RequestWrapperParams,
  errorHandler = error => {
    return `An error occurred: ${error}`;
  }
) => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export default requestWrapper;
