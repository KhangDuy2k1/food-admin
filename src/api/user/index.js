import axiosInstance from "../configAxios";
export const deleteUserFoot = async(id) => {
            const response = await axiosInstance.delete(`/users/delete?id=${id}`)
            return response.data
} 
export const detailUserFoot = async(id) => { 
            const response = await axiosInstance.get(`/users/detail-user?id=${id}`)
            return response.data
}
export const resetPassword = async(id) => {
            try {
                const result = await axiosInstance.patch(`/users/reset?id=${id}`)
            return result.data
            } catch (error) {
                throw error.response.data
            }   
}
export const deleteUser = async(id_user) => { 
            try {
                const response = await axiosInstance.delete(`/users/delete?id=${id_user}`)
                return response.data
            } catch (error) {
                console.error(error)
            }
}       
export const allUserFootApp = async(page) => {
    if(page){
            const response = await axiosInstance(`/users/getall?page=${page}&pageSize=12`)
            return response.data
    }else { 
            const response = await axiosInstance(`/users/getall`)
            return response.data
    }
}