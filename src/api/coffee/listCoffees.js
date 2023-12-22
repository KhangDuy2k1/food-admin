import axiosInstance from "../configAxios";
export const getListCoffee = async() => {
    try {
        const response = await axiosInstance.get("/coffee/getallcoffee")
        // console.log(response.data)
        return response.data;
    } catch (error) {
        return error.response.data
    }
}