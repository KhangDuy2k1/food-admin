import axiosInstance from "../configAxios";
export const deleteUser = async(id_user) => { 
     try {
        const response = await axiosInstance.delete(`/user/deleteuser/${id_user}`)
      //   console.log(response)
        return response.data
     } catch (error) {
        return error.response.data
     }
}