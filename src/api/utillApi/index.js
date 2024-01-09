import axios from "axios"

export const addressVN = async() => { 
    try {
        const result = await axios.get('https://provinces.open-api.vn/api/?depth=2')
       return result.data
    } catch (error) {
        return error
    }
       
}