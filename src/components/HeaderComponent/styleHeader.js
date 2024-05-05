import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1015px;
  padding: 10px 0;
`;

export const WrapperTextHeader = styled.a`
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  color: black;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const WrapperHD = styled.div`
  &: hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 230px;
`;

export const TextAccount = styled.div`
  font-size: 1.5rem;
  font-weight: 650;
`;
