import axiosInstance from "../configAxios";
export const totalOrder = async () => {
    try {
        const totalOrderRes = await axiosInstance.get('/order/totalorder')
        return totalOrderRes.data
    } catch (error) {
        return error.response.data
    }
}
