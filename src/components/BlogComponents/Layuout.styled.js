import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  jusify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  margin-top: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 23065px;
  padding: 0px 35px;
  outline: 1px solid blue;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px;
  margin-right: auto;
  margin-left: 35px;
`;
export const Elem1 = styled.div`
  margin-top: 300px;
  outline: 1px solid green;
  height: 10000px;
`;
export const Elem2 = styled.div`
  outline: 1px solid yellow;
  height: 10000px;
`;
