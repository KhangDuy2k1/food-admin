import { Select } from "antd";
import { statusArr } from "../data";
export const SelectComponent = ({dataArr, pld, onChange, value}) => { 
    const filterOption = (input, option) => {
        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      };
            return <Select
            value = {value}
            showSearch
            placeholder= {pld}
            optionFilterProp="children"
            onChange={onChange}
            filterOption={filterOption}
            options={dataArr?.map((data) => { 
                 return data.name ?  {
                  value: data.name,
                  label: data.name,
                } : 
                data
           })}
           />
}