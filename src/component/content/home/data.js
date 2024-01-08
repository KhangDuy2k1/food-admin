import { topBestStoreFoot } from "../../../api/store"

export function setDataBarChart(label, data) {
return  {
  labels: label,
  datasets: [
        {
           label: 'Popularity of colours',
           data: data,
           backgroundColor: [
           'rgba(255, 255, 255, 0.6)',
           'rgba(255, 255, 255, 0.6)',
           'rgba(255, 255, 255, 0.6)'
       ],
        borderWidth: 1,
      }
    ]
  }
}

export function setChartDataBar(dataBarChart){
  return {
    labels: dataBarChart?.labels?.map((data) => data), 
    datasets: [
      {
        label: "Doanh thu",
        data: dataBarChart?.datasets[0]?.data?.map((data) => data),
        backgroundColor: [
          "#E9967A",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }
} 

export const topBestStore = async() => { 
     try {
        const result = await topBestStoreFoot();
        let bestStore = {}
        for(let i = 0; i < result.length; i++){ 
             if(!bestStore[result[i].store_id]){ 
                bestStore[result[i].store_id] = {
                      store_name: result[i].store_name,
                      total: parseInt(result[i].total_price) 
                }
             }else { 
               bestStore[result[i].store_id].total += parseInt(result[i].total_price )
             }
        }
      let arrResult =  Object.values(bestStore)
      for(let i = 0;i < arrResult.length - 1;i++){
            for(let j = 0; j < arrResult.length  - 1 - i; j++){
                     if(arrResult[j].total < arrResult[j+1].total){
                           let temp = arrResult[j];
                           arrResult[j] = arrResult[j+1];
                           arrResult[j+1] = temp
                     }
            }
      }
      if(arrResult.length > 4){
        return arrResult.slice(0, 4)
      }else {
        return arrResult
      }
     } catch (error) {
        console.log(error)
     }
}