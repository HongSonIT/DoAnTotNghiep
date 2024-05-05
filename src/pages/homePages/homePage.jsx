import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import {
  WrapperHomePage,
  WrapperProductHomePage,
  WrapperTextHomePage,
} from '../homePages/styleHomePage';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import Hinhslide from '../../assets/image/Hinhslide.jpg';
import Hinhslide1 from '../../assets/image/Hinhslide1.png';
import Hinhslide3 from '../../assets/image/Hinhslide3.jpg';
import DescribeComponent from '../../components/DescribeComponent/DescribeComponent';
import { StyleHead } from '../../components/DescribeComponent/styleDescribe';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

const Home = () => {
  const arrPhong = ['Phòng Giường Đôi', 'Phòng Giường Đơn'];
  return (
    <>
      <div style={{ width: '1015px', margin: '0 auto' }}>
        <WrapperHomePage>
          {arrPhong.map((items) => {
            return (
              <WrapperTextHomePage>
                <TypeProduct name={items} />
              </WrapperTextHomePage>
            );
          })}
        </WrapperHomePage>
      </div>
      <div
        className="Body"
        style={{
          width: '100%',
          backgroundColor: '#f5fafe',
          padding: '0 0 20px',
        }}
      >
        <div
          id="container"
          style={{ height: '100%', width: '1015px', margin: '0px auto' }}
        >
          <SliderComponent arrImage={[Hinhslide, Hinhslide1, Hinhslide3]} />
          <DescribeComponent />
          <StyleHead style={{ marginTop: '30px' }}>
            <i>Các Loại Phòng</i>
          </StyleHead>
          <WrapperProductHomePage>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProductHomePage>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '35px',
            }}
          >
            <ButtonComponent
              text="Xem Thêm"
              size="large"
              style={{
                backgroundColor: '#d9d5d5',
                width: '240px',
                height: '38px',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#E6F0FF',
        }}
      >
        <NavbarComponent />
      </div>
    </>
  );
};

export default Home;
