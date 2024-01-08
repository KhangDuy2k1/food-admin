import axiosInstance from "../configAxios";
export const getAllStoreFoot = async() => { 
        try {
            const result = await axiosInstance.get('/stores/getAllStores')
            return result.data
        } catch (error) {
            throw error.response.data
        }
}
export const topBestStoreFoot = async() => { 
        try {
            const result = await axiosInstance.get('/stores/best-money-store')
            return result.data
        } catch (error) {
            throw error.response.data
        }
}