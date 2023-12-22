import  ButtonComponent  from "../../button";
import styles from "./login.module.scss";
import classNames from "classnames/bind";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { LoginAxios } from "../../../api/login";
import { setInfoUser } from "../../../redux/slice/user/infomation";
import { Input } from 'antd';
import { useEffect, useState } from "react";
import { User } from "../../../utill/validate";
const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState('')
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken")
      accessToken && navigate('/home');
    }, [])
    const handleLogin = async(e) => {
      e.preventDefault()
      const responseLogin = await LoginAxios(email, password)
      if(responseLogin.success){
        if( responseLogin.user.role === "admin") {
          localStorage.setItem('accessToken', responseLogin.accessToken);
          // setLogin(true);
          localStorage.setItem("email", responseLogin.user.email)
          localStorage.setItem("avatar", responseLogin.user.avatar)
          navigate('/home')
        }else {
          setError("you are not an admin")
        }
      }else {
        setError("wrong login information")
      }
    }
    return (
        <div className = {cx('container')}>
            <form className={cx('form')}>
              <p className={cx('header-form')}>Đăng nhập</p>
              <div className={cx('ip-text')}>
                <Input
                 size="middle"
                 placeholder="email"
                 prefix={<UserOutlined />}
                 onChange={(e) => {setEmail(e.target.value)}} />
             </div>
             <div className={cx('ip-text')}>
                <Input.Password
                 onChange={(e) => {setPassword(e.target.value)}}
                 prefix = {<LockOutlined />}
                 placeholder="password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
             </div>
            <p style={{color: "red"}}>{error}</p>
             <ButtonComponent
             style = {{
                width: "100%",
                borderColor: "#DAA520"
             }}
             onClick = {handleLogin}
             >
               Đăng nhập
             </ButtonComponent>
           </form>
        </div> 
      )
}
export default Login