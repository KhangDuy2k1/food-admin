import axiosInstance from "../configAxios";
export const deleteCoffeeAxios = async(id) => {
    try {
        const response = await axiosInstance.delete(`/coffee/deletecoffee/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}