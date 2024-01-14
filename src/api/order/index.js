import axiosInstance from "../configAxios";
export const allOrdersFoot = async(page, pageSize) => {
        if(page && pageSize){ 
                const response = await axiosInstance.get(`/orders/getall?page=${page}&pageSize=${pageSize}`);
                return response.data
        }else { 
                const response = await axiosInstance.get(`/orders/getall`);
                return response.data
        }
        
}
export const deleteOrderFoot = async(id_order) => { 
        try {   
            const result = await axiosInstance.delete(`/del?id=${id_order}`)
            console.log(result)
            return result.data
        } catch (error) {
            throw error.response.data
        }
}
export const newOrderFoot = async() => {
          try {
                const result = await axiosInstance.get('/orders/sort-new')
                return result.data
          } catch (error) {
                throw error.response.data
          }
}
export const searchOdersFoot = async(text) => { 
        try {
                const result = await axiosInstance.get(`/orders/find?text=${text}`)
                return result.data
        } catch (error) {
                throw error.response.data
        }
}
export const updateOrdersFoot = async({status, phone_order, address_order, id_order}) => {
        try {
                const result = await axiosInstance.patch(`/orders/update?id=${id_order}`, {
                        status,
                        phone_order,
                        address_order
                })
                return result.data
        } catch (error) {
                throw error.response.data
        }
}
export const countOrderByStatus = async() => { 
        try {
                const result = await axiosInstance.get('/orders/count-order-status')
                return result.data
        } catch (error) {
                throw error.response.data
        }
} 