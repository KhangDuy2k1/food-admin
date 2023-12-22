import axiosInstance from "../configAxios";
export const listUsers = async() => {
        try {
            const listUser = await axiosInstance.get("/user/getalluser");
            console.log(listUser)
            return listUser.data
        } catch (error) {
            return error.response.data
        }
}