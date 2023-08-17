import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  height: 100%;
  ${'' /* background: #f5f2f0; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  outline: 1px solid tomato;
  @media screen and (max-width: 1364px) {
    width: 100%;
  }
  @media screen and (min-width: 1365px) {
    width: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 1034px;
  }
`;
export const AuthorWrap = styled.div`
  display: flex;
  margin-bottom: 51px;
`;
export const AvatarWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #cbbe9c;
  padding: 2px;
  overflow: hidden;
`;
export const Avatar = styled.img`
  width: 110px;
  border-radius: 50%;
`;
export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 23px;
`;
export const Name = styled.p`
  padding: 0;
  margin: 0;
  color: #283340;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Date = styled.p`
  padding: 0;
  margin: 0;
  color: rgba(40, 51, 64, 0.8);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 60px 0px;
  padding: 0;
`;
export const Item = styled.li`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
