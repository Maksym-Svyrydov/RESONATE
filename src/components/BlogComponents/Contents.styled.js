import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 709px;
  height: 100%;
  ${'' /* background: #f5f2f0; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  background-color: rgba(203, 190, 156, 0.15);
  outline: 1px solid tomato;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 615px;
  outline: 1px solid green;
  padding: 21px 0px 0px 47px;
`;
export const Title = styled.h3`
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px 13px 0px;
`;
export const TitleAccent = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 400;
`;
export const ListTitle = styled.p`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-decoration-line: underline;
  margin: 0;
`;
export const List = styled.ul`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-decoration-line: underline;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 24px 0px;
  padding: 0;
`;

export const Item = styled.li`
  padding-left: 20px;
`;
