import axiosInstance from "../../configAxios";
export const allOrdersFoot = async() => {
        const response = await axiosInstance.get('/orders/getall');
        return response.data
}