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
  background: rgba(245, 242, 240, 1);
`;
export const TitleSection = styled.div``;

export const TextSectionM = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 80%;
  /* or 43px */
`;
export const TextSectionT = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 80%;
  /* or 43px */
`;
export const TextSectionI = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 22px;
  line-height: 50px;
  /* identical to box height, or 227% */

  color: #283340;
`;
export const Wrapp = styled.li`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding: 16px 6px 26px 16px;
  border-left: 2px solid #cbbe9c;
  width: 100%;
`;
export const WrappTitle = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;

  color: #cbbe9c;
`;

export const WrappText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #283340;
`;
export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  ${'' /* margin-bottom: 74px; */}
`;
export const Item = styled.li`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #283340;
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
  color: #283340;
  padding: 0px;
  margin: 0px 0px 13px 0px;
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
