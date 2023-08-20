import styled from 'styled-components';
import bgImg from '../../../../img/Cases/interico.png';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 1080px;
  background: rgba(245, 242, 240, 1);
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;
export const LogoSection = styled.div`
  display: flex;
  width: 748px;
  height: 1080px;
  flex-direction: row;
  background: linear-gradient(
      90deg,
      rgba(29, 29, 29, 0.6446953781512605) 0%,
      rgba(1, 1, 1, 0.39539565826330536) 16%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bgImg}), no-repeat;

  background-size: 800px auto;
  background-repeat: no-repeat;
  background-position: top 0px right -52px;
`;
export const TitleWrapp = styled.div`
  ${
    '' /* width: 521px;
  height: 335.343px; */
  }
  margin: auto auto;
`;
export const TextTitle = styled.p`
  color: #f5f2f0;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0px 0px 5px 0px;
  padding: 0px;
`;
export const LogoWrapp = styled.div`
  display: flex;
  margin: 15px auto 0px auto;
  justify-content: center;
  align-items: center;
  line-height: 120%;
`;
export const LogoText = styled.span`
  font-size: 66px;
  letter-spacing: 10px;
`;
export const ArrowWrapper = styled.div`
  height: 100%;
  width: 150px;
  background: #283340;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
`;
export const TextAccent = styled.span`
  color: #cbbe9c;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  margin-left: 20px;
`;
export const InfoLayout = styled.div`
  background: #283340;
  display: flex;
  flex-direction: row;
  color: #f5f2f0;
`;

export const DecriptionSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-right: 15px;
`;
export const TextWrapper = styled.div`
  margin-right: 25px;
`;
export const CaseTitle = styled.h2`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 118px;
  margin-bottom: 52px;
`;
export const CaseList = styled.ul`
  margin-bottom: 48px;
`;
export const CaseListTitle = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  list-style: none;
  margin-bottom: 3px;
`;
export const CaseItem = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2px;
`;
export const GoalWrapper = styled.div`
  border: 1px solid #cbbe9c;
  max-width: 565px;
  max-height: 362px;
  flex-shrink: 0;
  margin-bottom: 197px;
  padding: 38px 27px;
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const GoalTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
export const TimeLineLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const TimeLayout = styled.div``;
export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const ProjectTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 264px 0px 0px 20px;
  margin: 0px 0px 18px 0px;
`;
export const TimeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 10px;
  width: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const TimeItem = styled.li`
  height: 100px;
  width: 40px;
  padding-top: 0px;
`;
export const TimeItemLast = styled.li`
  width: 40px;
`;
export const ListLayout = styled.ul`
  list-style: none;
  padding: 0px 0px 0px 25px;
  height: 350px;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
export const ListLayoutItem = styled.li`
  list-style: none;
  padding: 0;
  height: 100px;
  width: 350px;
`;
export const Frame = styled.div`
  position: absolute;
  border-right: 1px solid #f5f2f0;
  width: 1px;
  height: 520px;
  top: 0px;
  left: 65px;
`;
export const CircleList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0px;
  left: 16px;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const CircleProcess = styled.li`
  width: 18px;
  height: 100px;
`;
export const CircleEl = styled.div`
  width: 18px;
  height: 18px;
  background-color: #c1c1c1;
  border-radius: 50%;
  padding: 0;
`;
export const CircleElAccent = styled.div`
  width: 21px;
  height: 21px;
  background-color: #cbbe9c;
  border-radius: 50%;
  padding: 0;
`;
