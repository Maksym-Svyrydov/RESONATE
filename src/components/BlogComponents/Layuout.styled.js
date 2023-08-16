import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  ${'' /* position: relative; */}
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
  ${'' /* position: absolute; */}
  top: 0;
  left: 0;
  flex-direction: column;
  box-sizing: border-box;
  ${'' /* width: 400px; */}
  height: 15000px;
  ${'' /* min-height: 23065px; */}

  outline: 1px solid blue;
  @media screen and (max-width: 1364px) {
    visually: hidden;
  }
  @media screen and (min-width: 1365px) {
    padding: 0px 20px;
    width: 294px;
  }
  @media screen and (min-width: 1919px) {
    padding: 0px 35px;
  }
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
