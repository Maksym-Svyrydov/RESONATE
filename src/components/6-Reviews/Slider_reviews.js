import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import { ReviewsCustomers, WrapperReview } from './Slider_reviews.styled';

export const SliderReviews = () => {
  const appendDots = (dots) => (
    <div
      style={{
        // backgroundColor: '#ddd',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
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
      <>Append Dots</>
      <ReviewsCustomers {...settings}>
        <WrapperReview key={1}>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
        </WrapperReview>
        <WrapperReview key={2}>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
        </WrapperReview>
        <WrapperReview key={3}>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
          <h3>1dfsdfsdf</h3>
        </WrapperReview>
      </ReviewsCustomers>
    </>
  );
};
