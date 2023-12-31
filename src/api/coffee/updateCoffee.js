import axiosInstance from "../configAxios";
export const updateCoffee  = async({_id,
    name, volume, desc, category,image, price
}) => { 
    try {
        const response = await axiosInstance.put(`/coffee/updatecoffee/${_id}`, {
            name: name,
            volume: volume,
            desc: desc,
            category: category,
            image: image,
            price: price
        })
        // console.log(response.data)
        return response.data;
    } catch (error) {
        return error.response.data
    }
}