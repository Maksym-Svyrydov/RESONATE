import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 20px;
  padding-top: 148px;
  background: #f5f2f0;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;
export const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 120%;
  color: #283340;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
`;
export const TextAccent = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 120%;
  text-decoration: underline;
  color: #cbbe9c;
  text-transform: uppercase;
  margin: 0px 0px 55px 0px;
`;
// export const Quote = styled.div`
//   color: #283340;
//   font-family: 'DM Sans', sans-serif;
//   font-size: 100px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   text-transform: uppercase;
//   padding: 0;
// `;
