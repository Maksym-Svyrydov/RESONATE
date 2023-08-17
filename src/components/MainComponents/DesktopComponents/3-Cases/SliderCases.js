import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import {
  ReviewsCustomers,
  WrapperReview,
  ButtonBox,
  ButtonList,
} from './SliderCases.styled';
import Zoo from './1-DT-CasesZoo';
export const SliderCases = () => {
  const appendDots = (dots) => (
    <ButtonBox
    // style={{
    //   backgroundColor: '#ddd',
    //   borderRadius: '10px',
    //   padding: '10px',
    // }}
    >
      <ButtonList> {dots} </ButtonList>
    </ButtonBox>
  );

  // const customPaging = (i) => (
  //   <div
  //     style={{
  //       width: '20px',
  //       color: 'blue',
  //       border: '1px blue solid',
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // );

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDots,
    // customPaging: customPaging,
  };
  return (
    <>
      <ReviewsCustomers {...settings}>
        <WrapperReview key={1}>
          <Zoo />
        </WrapperReview>
        <WrapperReview key={2}></WrapperReview>
        <WrapperReview key={3}></WrapperReview>
      </ReviewsCustomers>
    </>
  );
};
