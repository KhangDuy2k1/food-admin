import axiosInstance from "../configAxios";
export const deleteUser = async(id_user) => { 
     try {
        console.log(id_user)
        const response = await axiosInstance.delete(`/users/delete/id=${id_user}`)
        return response.data
     } catch (error) {
        console.log(error)
        return error.response.data
     }
}