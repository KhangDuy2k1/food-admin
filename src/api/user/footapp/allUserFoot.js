import axiosInstance from "../../configAxios";
export const allUserFootApp = async(page) => {
        if(page){
                const response = await axiosInstance(`/users/getall?page=${page}&pageSize=12`)
                return response.data
        }else { 
                const response = await axiosInstance(`/users/getall`)
                return response.data
        }
}