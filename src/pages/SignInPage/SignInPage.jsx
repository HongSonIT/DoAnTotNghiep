import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';

import {
  WrapperContainLeft,
  WrapperContainRight,
  WrapperText,
} from './StyleSI';
import InputLIO from '../../components/InputLIO/InputLIO';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import HinhLIO from '../../assets/image/Hinh1.jpg';
import { useNavigate } from 'react-router-dom';
import * as UserServices from '../../services/UserServices';
import { useMutationHook } from '../../hooks/useMutationHook';
import * as Message from '../../components/Message/Message';
import { updateUser } from '../../Redux/slides/userSlide';

const SignInPage = () => {
  const navigate = useNavigate();
  const mutation = useMutationHook((data) => UserServices.loginUser(data));
  const dispatch = useDispatch();
  const { data, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess) {
      Message?.success('Đăng Nhập Thành Công');
      navigate('/');
      localStorage.setItem('access_token', data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log('Decode : ', decoded);
        if (decoded?.id) {
          handelGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);
  const handelGetDetailUser = async (id, token) => {
    const res = await UserServices.getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  console.log('Mutation : ', mutation);
  const handleNavigateSignup = () => {
    navigate('/signup');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleOnChangeEmail = (value) => setEmail(value);
  const handleOnChangePassword = (value) => setPassword(value);
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.52)',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '700px',
          height: '413px',
          borderRadius: '7px',
          backgroundColor: '#fff',
          display: 'flex',
        }}
      >
        <WrapperContainLeft>
          <h1 style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>
            Xin Chào
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
            Đăng Nhập và Tạo Tài Khoản
          </p>
          <InputLIO
            style={{ margin: '20px 0' }}
            placeholder="Gmail"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <InputLIO
            placeholder="Mật Khẩu"
            value={password}
            onChange={handleOnChangePassword}
          />
          {data?.status === 'ERR' && (
            <span style={{ marginTop: '20px', fontSize: '12px', color: 'red' }}>
              {data?.message}
            </span>
          )}
          <ButtonComponent
            onClick={handleSignIn}
            disable={!email.length || !password.length}
            size={30}
            text="Đăng Nhập"
            style={{
              background: 'rgb(255,57,69)',
              height: '38px',
              width: '100%',
              borderRadius: '4px',
              margin: '26px 0 10px',
            }}
          />
          <p style={{ margin: '20px 0 12px' }}>
            <WrapperText>Quên Mật Khẩu</WrapperText>
          </p>
          <p style={{ fontFamily: 'sans-serif' }}>
            Chưa có tài khoản ?{' '}
            <WrapperText onClick={handleNavigateSignup}>
              Tạo tài khoản
            </WrapperText>
          </p>
        </WrapperContainLeft>
        <WrapperContainRight>
          <Image
            preview={false}
            src={HinhLIO}
            alt="Đăng Nhập"
            height={'193px'}
            width={'193px'}
            style={{ borderRadius: '50%' }}
          />
          <h3 style={{ fontFamily: 'sans-serif', margin: '8px 0' }}>
            Đặt Phòng Tại HSON
          </h3>
          <h4 style={{ fontFamily: 'sans-serif' }}>Ưu Đãi Mỗi Ngày</h4>
        </WrapperContainRight>
      </div>
    </div>
  );
};

export default SignInPage;
