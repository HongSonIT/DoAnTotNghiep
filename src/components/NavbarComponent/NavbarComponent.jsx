import { Row, Col } from 'antd';
import React from 'react';
import {
  WrapperFaceBook,
  WrapperFooter,
  WrapperIn,
  WrapperList,
  WrapperMap,
  WrapperText,
  WrapperTextMain,
} from './style';
import {
  FacebookOutlined,
  LinkedinOutlined,
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

const NavbarComponent = () => {
  return (
    <Row>
      <WrapperFooter>
        <Col span={6} style={{ padding: '0px 15px;' }}>
          <WrapperTextMain>HSON</WrapperTextMain>
          <WrapperText>HOMESTAY uy tín tại Hội An</WrapperText>
          <WrapperText style={{ borderBottom: 'none' }}>
            Kết nối với HSON
          </WrapperText>
          <WrapperList>
            <WrapperFaceBook>
              <FacebookOutlined
                style={{ fontSize: '4rem', position: 'relative' }}
              />
              <WrapperText
                style={{
                  fontSize: '1.4rem',
                  borderBottom: 'none',
                  position: 'absolute',
                  bottom: '1px',
                  left: '46px',
                }}
              >
                Facebook
              </WrapperText>
            </WrapperFaceBook>
            <WrapperIn>
              <LinkedinOutlined
                style={{ fontSize: '4rem', position: 'relative' }}
              />
              <WrapperText
                style={{
                  fontSize: '1.4rem',
                  borderBottom: 'none',
                  position: 'absolute',
                  bottom: '1px',
                  left: '184px',
                }}
              >
                Linked In
              </WrapperText>
            </WrapperIn>
          </WrapperList>
        </Col>
        <Col span={6} style={{ marginLeft: '90px' }}>
          <WrapperText style={{ borderBottom: 'none', marginTop: '8px' }}>
            Liên Hệ
          </WrapperText>
          <WrapperList>
            <HomeOutlined style={{ fontSize: '2rem', position: 'relative' }} />
            <WrapperText
              style={{
                fontSize: '1.4rem',
                borderBottom: 'none',
                position: 'absolute',
                top: '72px',
                left: '30px',
              }}
            >
              Cửa Đại , Hội An
            </WrapperText>
          </WrapperList>
          <WrapperList style={{ marginTop: '30px' }}>
            <PhoneOutlined style={{ fontSize: '2rem', position: 'relative' }} />
            <WrapperText
              style={{
                fontSize: '1.4rem',
                borderBottom: 'none',
                position: 'absolute',
                left: '30px',
              }}
            >
              0123456789
            </WrapperText>
          </WrapperList>
          <WrapperList style={{ marginTop: '25px' }}>
            <MailOutlined style={{ fontSize: '2rem', position: 'relative' }} />
            <WrapperText
              style={{
                fontSize: '1.4rem',
                borderBottom: 'none',
                position: 'absolute',
                left: '30px',
              }}
            >
              Hson@gmail.com
            </WrapperText>
          </WrapperList>
          <WrapperList style={{ marginTop: '25px' }}>
            <GlobalOutlined
              style={{ fontSize: '2rem', position: 'relative' }}
            />
            <WrapperText
              style={{
                fontSize: '1.4rem',
                borderBottom: 'none',
                position: 'absolute',
                left: '30px',
              }}
            >
              www.Hson.vn
            </WrapperText>
          </WrapperList>
        </Col>
        <Col span={6} style={{ marginRight: '95px', marginTop: '30px' }}>
          <WrapperMap>
            <iframe
              title="Địa Chỉ"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3834.3161950524072!2d108.2445476!3d16.0490735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420e7dd7176f9f%3A0xb331c27760ade742!2zQ-G6p3UgQW4gSOG7mWk!5e0!3m2!1svi!2s!4v1712824608452!5m2!1svi!2s"
              width="350"
              height="200"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </WrapperMap>
        </Col>
      </WrapperFooter>
    </Row>
  );
};

export default NavbarComponent;
