import axiosInstance from "../../configAxios";
export const allProductFoot = async() => {
     const response = await axiosInstance.get("/products/getAllProducts")
     return response.data
}