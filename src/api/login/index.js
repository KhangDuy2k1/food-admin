import axiosInstance from "../configAxios/index"
export const LoginAxios = async(username, password) => {
        try {
        const responseLogin =  await axiosInstance.post('/admins/signin', {
                username: username,
                password: password
            }
        )
        // console.log(responseLogin);
                return responseLogin.data;
        } catch (error) {
           return error.response.data
        }
}

    
