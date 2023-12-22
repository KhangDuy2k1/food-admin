import axiosInstance from "../configAxios/index"
export const LoginAxios = async(username, password) => {
        try {
        const responseLogin =  await axiosInstance.post('/user/login', {
                email: username,
                password: password
            }
        )
                return responseLogin.data;
        } catch (error) {
           console.error('Error:', error);
           console.error('Status code:', error.response.status);
           console.error('Response data:', error.response.data);
           return error.response.data
        }
}

    
