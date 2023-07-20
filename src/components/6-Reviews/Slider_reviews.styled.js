import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewsCustomers = styled(Slider)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 580px;
  }

  @media screen and (min-width: 1280px) {
    width: 1183px;
  }
`;
export const WrapperReview = styled.div`
  width: 280px;
  height: 300px;
  outline: 1px solid tomato;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-around;
  padding-bottom: 51px;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    padding-bottom: 118px;
  }
`;
