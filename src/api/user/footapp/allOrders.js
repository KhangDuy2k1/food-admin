import axiosInstance from "../../configAxios";
export const allOrdersFoot = async(page, pageSize) => {
        if(page && pageSize){ 
                const response = await axiosInstance.get(`/orders/getall?page=${page}&pageSize=${pageSize}`);
                return response.data
        }else { 
                const response = await axiosInstance.get(`/orders/getall`);
                return response.data
        }
        
}
export const deleteOrder = async() => { 
        try {
            const result = await axiosInstance.delete("/")
        } catch (error) {
                
        }
}