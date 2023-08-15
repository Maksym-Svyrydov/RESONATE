import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 1080px;
  padding-left: 10px;
  padding-right: 100px;
  padding-top: 176px;
  background: rgba(245, 242, 240, 1);
`;

export const ListSection = styled.div`
  margin: 80px 138px auto 0px;
  display: flex;
  box-sizing: border-box;
  max-width: 385px;
`;
export const BannerList = styled.ul`
  margin-bottom: auto;
`;
export const BannerActive = styled.li`
  margin-bottom: 48px;
  color: #283340;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
`;
export const Banner = styled.li`
  margin-bottom: 48px;
  color: #828282;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
`;
export const Frame = styled.div`
  border: 1px solid #283340;
  position: relative;
  margin-top: 22px;
  margin-left: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
  height: 384px;
`;
export const DotList = styled.ul`
  position: absolute;
  list-style: none;
  top: 0;
  left: -50px;
  margin: 0px 0px 0px 0px;
`;
export const DotActive = styled.li`
  margin-bottom: 48px;
  width: 21px;
  height: 21px;
  background-color: #283340;
  border-radius: 50%;
  margin-bottom: 60px;
`;
export const Dot = styled.li`
  margin-bottom: 48px;
  width: 21px;
  height: 21px;
  background-color: #828282;
  border-radius: 50%;
  margin-bottom: 60px;
`;
export const ContentWrapp = styled.div`
  display: flex;
  flex-direction: row;
  width: 481px;
`;
export const TitleSection = styled.div`
  margin: 0px 0px 0px 57px;
`;

export const WrappTitleLeft = styled.div`
  margin: 0px 0px auto 0px;
  padding: 75px 0px 0px 0px;
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
`;
export const TextSectionM = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 160px;
  line-height: 80%;
  color: #cbbe9c;
  margin: 0px 0px 2px 0px;
`;
export const TextSectionT = styled.span`
  display: inline-block;
  font-family: 'DM Sans';
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  margin-left: 304px;
  /* or 43px */
`;
export const TextSectionI = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-style: italic;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  color: #828282;
  width: 110px;
  margin-left: 50px;
`;

export const Wrapp = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-width: 481px;
  padding: 0px 0px 13px 16px;
  ${'' /* border-left: 2px solid #cbbe9c; */}
`;
export const WrappTextSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: normal;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 14px 0px;
`;
export const WrappText = styled.div`
  padding: 0px 0px 0px 0px;
`;

export const Line = styled.div`
  min-width: 20px;
  height: 100%;
  margin-right: 12px;
  border-left: 1px solid #cbbe9c;
  border-right: 1px solid #283340;
`;
export const WrappTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #cbbe9c;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 6px 0px;
`;
export const Text = styled.p`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;
export const ButtonWrapper = styled.div`
  outline: 1px solid tomato;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 85px 0px 0px auto;
  max-width: 385px;
`;

export const List = styled.ul`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  margin: 0px;
  padding: 0px 0px 0px 32px;
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
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 14px 0px;
`;

export const SectionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 260px;
  margin-top: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  background: #283340;
  padding: 0px 12px 0px 12px;
`;
export const ImdBg = styled.img`
  width: 459px;
  height: 300px;
  flex-shrink: 0;
  color: rgba(203, 190, 156, 1);
  position: absolute;
  bottom: -70px;
  left: -50px;
  overflow: hidden;
`;
export const SectionHelp = styled.div`
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 20px 65px 21px;
  margin-top: auto;
`;

export const SectionText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: #f5f2f0;
  margin-top: auto;
`;
