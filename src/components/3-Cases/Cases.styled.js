import styled from 'styled-components';
export const Section = styled.section`
  outline: 2px solid tomato;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  ${
    '' /* padding-left: 22px;
  padding-right: 20px; */
  }
  padding-top: 100px;
  background-color: #283340;
`;
export const Title = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #f5f2f0;
  text-shadow:: 3px 3px 1px #CBBE9C;
  margin-left:22px;

 
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  justify-content: flex-start;
  padding: 0px;
  list-style: none;
`;
export const Item = styled.li`
  border: 1px solid #cbbe9c;
  padding-left: 30px;
  padding-top: 18px;
  background-repeat: no-repeat;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 54.17%
  );
  background-blend-mode: overlay;
  border: 1px solid #cbbe9c;
`;

export const TextWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #f5f2f0;
`;
export const Customer = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #cbbe9c;
  text-decoration: underline;
  margin-bottom: 12px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${'' /* margin-left: 200px; */}
  padding-right: 0px;
  margin-bottom: 12px;
  align-items: center;
`;

export const TextLink = styled.span`
  font-family: 'Poppins', sans-serif;
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #f5f2f0;
  margin-right: 20px;
`;
export const Link = styled.a`
  display: flex;
  color: white;
`;
export const Icon = styled.svg`
  flex: none;
  fill: #f5f2f0;
  transition: fill 0.25s;
  width: 88px;
  height: 18px;

  ${Link}:hover & {
    fill: #cbbe9c;
  }
`;
