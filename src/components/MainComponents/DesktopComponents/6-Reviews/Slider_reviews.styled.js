import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewsCustomers = styled(Slider)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 100%;
  .slick-dots li.slick-active button:before {
    color: #283340;
    width: 21px;
    height: 21px;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 21px;
    line-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    background-color: #828282;
  }
  .slick-dots {
  }
`;
export const WrapperReview = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  height: 480px;
  list-style: none;
  margin-bottom: 50px;
  padding: 0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Quote = styled.div`
  margin-bottom: 10px;
`;
export const QuoteImg = styled.img`
  width: 78px;
  height: 78px;
`;
export const ReviewTextItem = styled.li`
  margin-bottom: 34px;
  font-size: 24px;
  height: 186px;
`;
export const CustomerWrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: 14px;
  margin-right: auto;
  margin-top: auto;
`;
export const CustomerAvatar = styled.img`
  border-radius: 50%;
  width: 100px;
`;
export const CustomerNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 12px;
  font-size: 24px;
  @media screen and (min-width: 667px) {
    margin-right: auto;
  }
`;
export const CustomerName = styled.span``;
export const CustomerCompany = styled.span`
  color: rgba(40, 51, 64, 0.8);
  font-weight: 400;
`;
export const ButtonBox = styled.div`
  justify-content: space-around;
  gap: 55px;
  display: flex;
  width: 300px;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    padding-bottom: 118px;
  }
`;
export const ButtonList = styled.ul`
  padding: 0px;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto;
`;
