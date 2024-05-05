import styled from 'styled-components';

export const Comp = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  min-width: 100px;
  padding: 9px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: white;

  + .wrapper {
    margin-left: 12px;
  }

  &:hover {
    background-color: rgb(249, 248, 248);
  }
`;

export const WrapButton = styled.span`
  padding: 5px 8px;
  display: flex;
  justify-content: flex-start;
`;

export const LeftIcon = styled.span`
  margin-left: 8px;
`;

export const Child = styled.span`
  margin-left: 8px;
`;
