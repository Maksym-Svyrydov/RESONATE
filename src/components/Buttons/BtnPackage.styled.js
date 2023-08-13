import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 62.338px;
  border: 1px solid #cbbe9c;
  background: #283340;
  display: flex;
  align-items: center;
  padding: 16px 69px;
  jusify-content: center;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  margin-top: 96px;
  @media screen and (max-width: 1919px) {
    visibility: hidden;
  }
  @media screen and (min-width: 1919px) {
    width: 380px;
    height: 80px;
    margin-top: 0px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #cbbe9c;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  jusify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
