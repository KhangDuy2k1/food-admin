
import { getListCoffee } from "../../../api/coffee/listCoffees"
export const getallcoffeeCategory = async() => { 
        const listcoffee = await getListCoffee()
        // console.log( listcoffee.allCoffee.allCoffee)
        const totalcoffee =  listcoffee.allCoffee.allCoffee.filter((item) => { 
                return item.category._id === "6502f78da7cec6a1ae697144"
         }).length
         const totalTea =  listcoffee.allCoffee.allCoffee.filter((item) => { 
          return item.category._id === "6502f794a7cec6a1ae697147"
          }).length
          const totalDaxay =  listcoffee.allCoffee.allCoffee.filter((item) => { 
    return item.category._id === "6502f7a3a7cec6a1ae69714a"
          }).length
         const totalTayBac =  listcoffee.allCoffee.allCoffee.filter((item) => { 
          return item.category._id === "6502f7a3a7cec6a1ae69714a"
          }).length
          return [
              {
                id: 1, 
                name: "Cà Phê",
                total: totalcoffee
              }, 
              {
                id: 2, 
                name: "Trà",
                total: totalTea
              }, 
              {
                id: 3, 
                name: "Thức uống đá xay",
                total: totalDaxay
              },
              {
                id: 4, 
                name: "trà xanh tây bắc",
                total: totalTayBac
              }
          ]
}