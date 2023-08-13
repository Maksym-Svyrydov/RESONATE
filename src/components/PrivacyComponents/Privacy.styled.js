import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  padding-top: 213px;
  background: #283340;
  color: #f5f2f0;
  ${'' /* align-items: center; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
`;
export const Wrapper = styled.div`
  margin: 0px 0px 0px 20px;
  width: 1100px;
`;
export const Title = styled.h2`
  color: #cbbe9c;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 50.4px */
  text-transform: uppercase;
`;
export const SubTitile = styled.h3`
  color: #f5f2f0;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
`;
export const Text = styled.p`
  color: rgba(245, 242, 240, 0.8);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
