import axios from "axios";
// const accessToken = localStorage.getItem('accessToken');
const axiosInstance = axios.create({
    baseURL: 'https://khangbarca.vercel.app', 
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": `Bearer ${accessToken}`

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