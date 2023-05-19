import styled from 'styled-components';
export const Section = styled.section`
  outline: 2px solid tomato;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  padding-top: 100px;
  background: #283340;
`;

export const Title = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  color: #f5f2f0;
  text-transform: uppercase;
  line-height: 30px;
`;

export const Subtitle = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: Bold;
  font-weight: 700;
  font-size: 34px;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  color: rgba(203, 190, 156, 1);
  text-transform: uppercase;
  line-height: 34px;
  text-decoration: underline;
  margin-bottom: 86px;
`;
export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  margin-bottom: 74px;
`;
export const Item = styled.li`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  color: #f5f2f0;
  padding: 0px;
`;
export const TitleItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  padding: 0px;
  margin: 0px 0px 6px 0px;
`;
export const TitleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 0px;
  margin: 0px 0px 22px 0px;
`;
export const Button = styled.button`
  width: 300px;
  height: 62px;
  padding: 16px 69px;
  margin-bottom: 65px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background: #cbbe9c;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: rgba(40, 51, 64, 1);
`;
