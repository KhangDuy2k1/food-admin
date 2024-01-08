import { LuPenLine } from "react-icons/lu";
import { FaTransgender } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../button";
import { useEffect, useState } from "react";
import { detailUserFoot } from "../../../api/user";
import { setInfoUser, setShowResetModal } from "../../../redux/slice/user";
export const DetailUserComponent = () => { 
    const [dataUser, setDataUser] = useState()
    const [total, setTotal] = useState()
    let {user_id} = useParams()
    const dispatch = useDispatch()
    const limitString  = (text, maxLength) => {
            return text?.lenght < maxLength ? text : `${text?.slice(0, maxLength)}`
    }
    const convertStringtoDate = (dateString) => {
        const date = new Date(dateString)
          return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    }
    const handleReset = () => {
        dispatch(setInfoUser({
            user_id: user_id
        }))
        dispatch(setShowResetModal(true))
    }
    useEffect(() => {
        (async function setData(){
            const result = await detailUserFoot(user_id)
            setTotal(result.total[0])
            setDataUser(result.data[0])
        })()
      }, []);
    return (
        <div>
            <h2>Profile</h2>
         <div style={{display: "flex"}}>
         
         <div style={{width: "20%",display: "flex", flexDirection: "column", alignItems: "center"}}>
             <img style={{width: "80px", borderRadius: "50%"}} src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3NjQxNDM4Mzg3Nzc1Mjgy/imago1002751080h.jpg" alt="" />
             <LuPenLine />
             <p style={{fontSize: "20px"}}>{dataUser?.username ? dataUser.username : <i>Chưa cập nhật</i>}</p>
             <p style={{color: "#A9A9A9"}}>{dataUser?.email ? dataUser.email : <i>Chưa cập nhật</i>}</p>
         </div>
         <div style={{width: "30%"}}>
             <ul style={{listStyle: "none"}}>

                <li style={{margin: "0px 10px 10px 0",}}>
                    <span style={{fontSize: "20px", marginRight: "10px"}}>
                        <FaTransgender/> 
                    </span>  
                    {dataUser?.gender ? dataUser?.gender : <i>Chưa cập nhật</i>}
                 </li> 

                 <li style={{margin: "0 10px 10px 0",}}>
                    <span style={{fontSize: "20px",  marginRight: "10px"}}>
                        <RiLockPasswordFill/>   
                    </span>
                  {limitString(dataUser?.password, 25)}
                  <div>
                  <ButtonComponent style= {{backgroundColor: "#00CED1", color: "white"}} onClick = {handleReset}>Reset</ButtonComponent>
                  </div>
                 
                 </li>

                <li style={{margin: "0 10px 10px 0",}}>
                    <span style={{fontSize: "20px",  marginRight: "10px"}}> 
                        <FaLocationDot/>
                    </span>
                    {dataUser?.address ? dataUser.address : <i style={{color: "rgb(180, 180, 180)"}}>Chưa cập nhật</i>}
                </li>    

                <li style={{margin: "0 10px 10px 0",}}>
                    <span style={{fontSize: "20px",  marginRight: "10px"}}>
                    <FaPhone/>
                </span> 
                {dataUser?.phone ? dataUser.phone : <i>Chưa cập nhật</i>}
                 </li>  

                <li style={{margin: "0 10px 10px 0",}}>
                    <span style={{fontSize: "20px",  marginRight: "10px"}}>
                        <FaBirthdayCake/> 
                    </span>
                {convertStringtoDate(dataUser?.dob)}
                </li> 

            </ul>
         </div>
         <div>
            <div style={{width: "200px", height: "150px",color: "white",padding: "10px",borderRadius: "10px",fontSize: "15px", backgroundColor: "#FFB6C1"}}>
                 <h6>Tổng số đơn đã đặt: </h6>
                 <h2>{total?.totalorder}</h2>
            </div>
         </div>
     </div>
        </div>
      
    )
}