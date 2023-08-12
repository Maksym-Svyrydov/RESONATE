import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 651px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  background-color: #283340;
  outline: 1px solid tomato;
  padding: 139px 0px;
`;
export const Title = styled.p`
  color: #f5f2f0;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 86.4px */
  text-transform: uppercase;
  margin: auto;
`;
export const TitleAccent = styled.span`
  color: #cbbe9c;
  text-decoration-line: underline;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 65px;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  width: 280px;
  height: 97px;
  padding: 0;
`;
export const Facebook = styled.a`
  display: flex;
  jusify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  background-color: #3b5998;

  text-decoration: none;
  color: #fff;
  padding-left: 26px;
`;
export const Twit = styled.a`
  display: flex;
  border-radius: 12px;
  background-color: #1ca1f2;

  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  jusify-content: center;
  align-items: center;
  padding-left: 32px;
`;
export const Lnkdn = styled.a`
  display: flex;
  jusify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #0077b6;

  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  padding-left: 26px;
`;
export const Img = styled.img`
  width: 35px;
  margin-right: 35px;
`;
export const LinkTxt = styled.span`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: 0.96px;
  margin: 0;
  padding: 0;
`;
