import axiosInstance from "../configAxios";
export const deleteUser = async(id_user) => { 
     try {
        const response = await axiosInstance.delete(`/users/delete?id=${id_user}`)
        return response.data
     } catch (error) {
        console.error(error)
      //   return error.response.data
     }
}