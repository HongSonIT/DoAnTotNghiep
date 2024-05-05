import { Badge, Col } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import MenuItems from '../MenuAccountComponent/MenuAccountComponent';
import WrapperAccount from '../WrapperButtonAccountComponent/WrapperButtonAccount';
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperHD,
  Content,
  TextAccount,
} from '../HeaderComponent/styleHeader';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Thông Tin Cá Nhân',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài Đặt',
      to: '/setting',
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Đăng Xuất',
      to: '/feedback',
    },
  ];

  const RenderItems = () => {
    return userMenu.map((item, index) => {
      return <MenuItems key={index} data={item} />;
    });
  };

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleNavigate = () => {
    navigate('/signin');
  };
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#E6F0FF',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        top: '0px',
        zIndex: 1,
      }}
    >
      <WrapperHeader style={{ marginRight: '14px' }}>
        <Col span={4} style={{ marginLeft: '5px' }}>
          <WrapperTextHeader href="http://localhost:3000/">
            HSON
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            placeholder="Tìm Kiếm Phòng"
            allowClear
            size="large"
            text="Tìm Kiếm"
          />
        </Col>
        <Col
          span={8}
          style={{ display: 'flex', gap: '35px', alignItems: 'center' }}
        >
          <WrapperHeaderAccount style={{ marginLeft: '7px' }}>
            <UserOutlined style={{ fontSize: '25px' }} />
            {user?.name ? (
              <Tippy
                interactive
                delay={[0, 800]}
                placement="bottom"
                render={(attrs) => (
                  <Content tabIndex="-1" {...attrs}>
                    <WrapperAccount>{RenderItems()}</WrapperAccount>
                  </Content>
                )}
              >
                <TextAccount>{user?.name}</TextAccount>
              </Tippy>
            ) : (
              <WrapperHD onClick={handleNavigate}>
                <span>Đăng nhập | Đăng Ký</span>
                <div>
                  <span>Tài khoản</span>
                  <CaretDownOutlined />
                </div>
              </WrapperHD>
            )}
          </WrapperHeaderAccount>
          <WrapperHD>
            <Badge count={4} size="small">
              <ShoppingOutlined style={{ fontSize: '25px' }} />
            </Badge>
            <span style={{ marginLeft: '3px' }}>Phòng của tôi</span>
          </WrapperHD>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
