import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  max-height: min((100vh - 96px) - 60px, 734px);
  min-height: 100px;
  padding: 10px 0px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  border-radius: 8px;
  margin-top: 5px;
`;
