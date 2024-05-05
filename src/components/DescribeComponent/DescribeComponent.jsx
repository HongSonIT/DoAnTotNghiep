import React from 'react';
import Hinh1 from '../../assets/image/Hinh1.jpg';
import {
  StyleDecribe,
  StyleText,
  StyleTextBlow,
  StyleHead,
} from './styleDescribe';

const DescribeComponent = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <StyleHead>
        <i>Về Chúng Tôi</i>
      </StyleHead>
      <StyleDecribe>
        <div>
          <StyleText>CHÀO MỪNG BẠN ĐẾN VỚI HSON HOMESTAY</StyleText>
          <StyleTextBlow>
            Còn gì tuyệt vời hơn khi cùng nhau tận hưởng tuần trăng mật ngọt
            ngào, lưu giữ những kỷ niệm tuyệt đẹp tại thiên đường nghỉ dưỡng
            HSON. Dạo bước cùng nhau trong khu vườn nhiệt đới, tận hưởng bữa tối
            lãng mạn trên bãi biển, hay không gian riêng tư với phòng nghỉ sang
            trọng hướng vườn , tất cả đang chờ đón bạn tại HSON Đà Nẵng
          </StyleTextBlow>
        </div>
        <img src={Hinh1} alt="Hinh1" width={'650px'} />
      </StyleDecribe>
    </div>
  );
};

export default DescribeComponent;
