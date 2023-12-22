import axiosInstance from "../configAxios";
export const listAllOrders = async() => {
    try {
        const response = await axiosInstance.get("/order/allorders")
        return response.data;
    } catch (error) {
        return error.reponse.data;
    }
}