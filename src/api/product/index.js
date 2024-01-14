import axiosInstance from "../configAxios";
export const allProductFoot = async(page, pageSize) => {
     const response = await axiosInstance.get(`/products/getAllProducts?page=${page}&pageSize=${pageSize}`)
     return response.data
}
export const deleteProductFoot = async(product_id) => { 
     try {
          const response = await axiosInstance.delete(`/products/delete/${product_id}`)
          return response.data;
     } catch (error) {
          throw error.response.data;
     }

}

export const addProductFoot = async({
     product_name,
     store_id,
     avatar,
     size,
     price,
     discount,
     status,
     rate,
     description
 }) => {
     console.log({
          product_name,
          store_id,
          avatar,
          size,
          price,
          discount,
          status,
          rate,
          description
      })
    try {
          const result = await axiosInstance.post('/products/add', {
               product_name,
               store_id,
               avatar,
               size,
               price,
               discount,
               status,
               rate,
               description
           })
           return result.data
    } catch (error) {
           console.error(error)
           throw error.response.data
    }
}

export const productBestSell = async() => {
     const response = await axiosInstance.get('/products/product-best-sell')
     return response.data
}
