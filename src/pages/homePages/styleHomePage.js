import styled from 'styled-components';

export const WrapperHomePage = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: flex-start;
  height: 44px;
  border-bottom: 1px solid black;
`;

export const WrapperTextHomePage = styled.div`
  font-size: 15px;
  font-weight: 5px;
  &: hover {
    cursor: pointer;
  }
`;

export const WrapperProductHomePage = styled.div`
  margin: 20px 0px 0px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;
