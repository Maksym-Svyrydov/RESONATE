import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  ${'' /* background-color: rgba(203, 190, 156, 0.15); */}
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
export const Title = styled.h2`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Text = styled.p`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SubTitle = styled.h3`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const TxtAccent = styled.span`
  color: #283340;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;
export const TextList = styled.li`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
