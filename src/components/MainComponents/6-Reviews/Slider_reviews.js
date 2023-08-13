import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import {
  ReviewsCustomers,
  WrapperReview,
  ReviewTextItem,
  CustomerWrapper,
  CustomerAvatar,
  CustomerNameWrapper,
  CustomerName,
  CustomerCompany,
  ButtonBox,
  ButtonList,
} from './Slider_reviews.styled';
import avatCustomer from '../../../img/Customers-avatars/Igor_Radchenko.png';
export const SliderReviews = () => {
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
          <ReviewTextItem>
            Resonate is a great partner and helps us drive traffic and
            conversions to our company platform. They contribute enormously to
            our growth with an excellent return on investment in our campaigns.
            They are fast, flexible and have a deep understanding of what they
            are doing.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={avatCustomer} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | Vikno System</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={2}>
          <ReviewTextItem>
            Resonate is a great partner and helps us drive traffic and
            conversions to our company platform. They contribute enormously to
            our growth with an excellent return on investment in our campaigns.
            They are fast, flexible and have a deep understanding of what they
            are doing.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={avatCustomer} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | Vikno System</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={3}>
          <ReviewTextItem>
            Resonate is a great partner and helps us drive traffic and
            conversions to our company platform. They contribute enormously to
            our growth with an excellent return on investment in our campaigns.
            They are fast, flexible and have a deep understanding of what they
            are doing.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={avatCustomer} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | Vikno System</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
      </ReviewsCustomers>
    </>
  );
};
