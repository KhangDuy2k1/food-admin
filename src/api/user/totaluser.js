import axiosInstance from "../configAxios/index"
export const totalUser = async() => {
    try {
     const responseTotalUser = await axiosInstance.get('/user/totaluser')
       return responseTotalUser.data
    } catch (error) {
        return error.response.data
    }
}