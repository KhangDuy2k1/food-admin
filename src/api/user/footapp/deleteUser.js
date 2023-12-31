import axiosInstance from "../../configAxios";
export const deleteUserFoot = async(id) => {
            const response = await axiosInstance.delete(`/users/delete?id=${id}`)
            return response.data
} 