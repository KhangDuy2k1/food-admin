import axiosInstance from "../configAxios";
export const totalCancled = () => {
        return new Promise((resolve , reject ) => {
            axiosInstance.get("/order/totalcancle")
            .then((data) => {resolve(data.data)})
            .catch((error) => {reject(error.response.data)});
        })
} 