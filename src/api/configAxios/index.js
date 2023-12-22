import axios from "axios";
const accessToken = localStorage.getItem('accessToken');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8888/api', 
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`

    },
});
// axiosInstance.interceptors.request.use(
//     function (config) {
//       const accessToken = localStorage.getItem('accessToken');
//       if (accessToken) {
//         // Thêm token vào tiêu đề Authorization
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );    
export default axiosInstance;