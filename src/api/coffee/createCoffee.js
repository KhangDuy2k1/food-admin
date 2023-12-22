import axiosInstance from "../configAxios";
export const createCoffee = async({name, price, volume,image,desc, category}) => {          
    try {
        const response =  await axiosInstance.post('/coffee/addcoffee', {
            name: name,
            price: price,
            volume: volume, 
            desc: desc,
            image: image,
            category: category
    })
     return response
    } catch (error) {
        return error.response.data
    }
               
              
}