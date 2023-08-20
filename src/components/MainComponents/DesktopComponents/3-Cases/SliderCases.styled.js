import Slider from 'react-slick';
import styled from 'styled-components';

export const SliderContainer = styled(Slider)`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 1080px;
  padding: 0;
  .slick-slider {
    box-sizing: border-box;
    height: 1080px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0;
  }
  .slick-dots li button:before {
    opacity: 0;
  }
  .slick-dots li button {
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background: #c1c1c1;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }
  .slick-dots li.slick-active button {
    width: 21px;
    height: 21px;
    border-radius: 100%;
    background: #cbbe9c;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;
export const Wrapper = styled.div`
  list-style: none;
  padding: 0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 25px;
  padding-bottom: 55px;
  justify-content: space-around;
  position: relative;
  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    ${'' /* margin-top: 32px; */}
    ${'' /* padding-bottom: 118px; */}
  }
`;
export const ButtonList = styled.ul`
  padding: 0px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  gap: 100px;
  justify-content: center;
  align-items: baseline;
  padding-bottom: 50px;
`;
export const Frame = styled.div`
  width: 395px;
  height: 1px;
  position: absolute;
  bottom: 90px;
  right: 695px;
  background-color: #cbbe9c;
`;
