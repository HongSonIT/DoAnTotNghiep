import React, { useEffect, useState } from "react";
import { WrapperContainLeft, WrapperContainRight, WrapperText } from "../SignInPage/StyleSI";
import InputLIO from "../../components/InputLIO/InputLIO";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image} from "antd";
import HinhLIO from "../../assets/image/Hinh1.jpg"
import { useNavigate } from "react-router-dom";
import * as UserServices from '../../services/UserServices'
import { useMutationHook } from "../../hooks/useMutationHook";
import * as Message from '../../components/Message/Message'

const SignUpPage = () => {
    const navigate = useNavigate()
    const mutation = useMutationHook(
        data => UserServices.signupUser(data)
    )
    const {data , isSuccess , isError} = mutation
    useEffect(() => {
        if(data?.status === 'ERR'){
            Message?.error("Đăng Ký Thất Bại " + data?.message)
        }else if(isSuccess){
            Message?.success("Đăng Ký Thành Công")
            handleNavigateSignin()
        }
    },[isSuccess,isError])
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const handleNavigateSignin = () => navigate('/signin')
    const handleOnChangeEmail = value => setEmail(value)
    const handleOnChangeName = value => setName(value)
    const handleOnChangePassword = value => setPassword(value)
    const handleOnChangeConfirmPassword = value => setConfirmPassword(value)
    const handleSignUp = () => {
        mutation.mutate({name,email,password,confirmPassword})
    }
    return (
        <div style={{display:'flex',alignItems:'center' , justifyContent:'center',background:'rgba(0,0,0,0.52)', height:'100vh'}}>
            <div style={{width:'700px' , height:'440px', borderRadius : '7px' , backgroundColor : '#fff', display:'flex'}}>
                <WrapperContainLeft>
                    <h1 style={{fontFamily:'sans-serif', fontSize:'30px'}}>Xin Chào</h1>
                    <p style={{fontFamily:'sans-serif' , fontSize:'13px'}}>Đăng Nhập và Tạo Tài Khoản</p>
                    <InputLIO style={{margin : '20px 0 0 0'}} placeholder = "Tên Đăng Nhập" value={name} onChange={handleOnChangeName}/>
                    <InputLIO style={{margin : '20px 0'}} placeholder = "Gmail" value={email} onChange={handleOnChangeEmail}/>
                    <InputLIO style={{margin : '0 0 20px'}} placeholder = "Mật Khẩu" value={password} onChange={handleOnChangePassword}/>
                    <InputLIO placeholder = "Nhập Lại Mật Khẩu" value={confirmPassword} onChange={handleOnChangeConfirmPassword}/>
                    {data?.status === 'ERR' && <span style={{marginTop:'10px', fontSize:'12px', color:'red'}}>{data?.message}</span>}
                    <ButtonComponent disable={!name.length || !email.length || !password.length || !confirmPassword.length} onClick={handleSignUp} size={30} text="Đăng Ký" style={{background:'rgb(255,57,69)' , height : '38px' , width : '100%' , borderRadius : '4px' , margin : '26px 0 10px'}}/>
                    <p style={{fontFamily:'sans-serif' , margin : '10px 0' , fontSize : '12px'}}>Bạn đã có tài khoản ? <WrapperText onClick={handleNavigateSignin}>Đăng Nhập</WrapperText></p>
                </WrapperContainLeft>
                <WrapperContainRight>
                    <Image preview={false} src={HinhLIO} alt="Đăng Nhập" height={'193px'} width={'193px'} style={{borderRadius:'50%'}}/>
                    <h3 style={{fontFamily:'sans-serif', margin:'8px 0'}}>Đặt Phòng Tại HSON</h3>
                    <h4 style={{fontFamily:'sans-serif'}}>Ưu Đãi Mỗi Ngày</h4>
                </WrapperContainRight>
            </div>
        </div>
    )
}

export default SignUpPage