import axiosInstance from "../configAxios";
export const getAllStoreFoot = async(page, size) => { 
        try {
            if(page && size){
               const result = await axiosInstance.get(`/stores/getAllStores?page=${page}&pageSize=${size}`)
               return result.data
            }
            const result = await axiosInstance.get('/stores/getAllStores')
            return result.data
        } catch (error) {
            throw error.response.data
        }
}
export const deleteStoreFoot = async(store_id) => { 
        try {
            const result = await axiosInstance.delete(`/stores/delete/${store_id}`)
            return result.data
        } catch (error) {
            throw error
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

export const addStoreFoot = async(
    {
        store_name,
        avatar,
        address,
        phone,
        rate,
        time_open,
        time_close,
        store_type
    }
) => {
        try {
            const result = await axiosInstance.post('/stores/add', 
                {
                    store_name,
                    avatar,
                    address,
                    phone,
                    rate,
                    time_open,
                    time_close,
                    store_type
                }
            )
            return result.data
        } catch (error) {
            throw error.response.data
        }
}
export const updateStoreFoot = async({
    store_id,
    store_name,
    avatar,
    address,
    phone,
    rate,
    time_open,
    time_close,
    store_type
}) => { 
    try {
       const result = await axiosInstance.put(`/stores/update/${store_id}`, {
            store_name,
            avatar,
            address,
            phone,
            rate,
            time_open,
            time_close,
            store_type
       })
       return result.data
    } catch (error) {
       throw error.response.data
    }

}