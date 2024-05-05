import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyle = styled(Card)`
  width: 250px;
  & img {
    height: 250px;
    width: 250px;
  }
`;

export const StyleNameProduct = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const TextProduct = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: rgb(128, 128, 137);
`;

export const PriceProduct = styled.div`
  font-size: 16px;
  color: red;
`;
