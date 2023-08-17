import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 1080px;
  padding-left: 10px;
  padding-right: 100px;
  padding-top: 176px;
  background: rgba(245, 242, 240, 1);
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-right: 50px;
    padding-top: 106px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding-left: 10px;
    padding-right: 55px;
    padding-top: 176px;
  }
`;
