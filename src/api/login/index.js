import axiosInstance from "../configAxios/index"
export const LoginAxios = async(username, password) => {
        try {
        const responseLogin =  await axiosInstance.post('/admins/signin', {
                username: username,
                password: password
            }
        )
                return responseLogin.data;
        } catch (error) {
                return error.response.data
        }
}

    
