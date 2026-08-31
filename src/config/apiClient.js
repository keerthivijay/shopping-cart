import axios from 'axios';

// Dynamically fetch the API key depending on your build system
// const baseURL = import.meta.env?.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;
// const baseURL = 'http://localhost:5173/data.json';
const baseURL = 'https://dummyjson.com/';

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor: Automatically inject authentication tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; //
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Global handler for errors (e.g., 401 Unauthenticated)
apiClient.interceptors.response.use(
  (response) => response.data, // Strip axios wrapper data automatically
  (error) => {
    if (error.response && error.response.status === 401) {
      // Logic for automatic logout or refreshing token goes here
      console.error('Unauthorized access - redirection needed.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;