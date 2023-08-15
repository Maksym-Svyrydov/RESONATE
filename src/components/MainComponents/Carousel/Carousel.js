import React from 'react';
import { useRef } from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  //   WrapperReview,
  Layout,
  SliderBox,
  SliderItem,
  ButtonBox,
  ButtonPreview,
  ButtonNext,
} from './Carouse.styled';

import iconArrow from '../../../img/icons/arrow-left.svg';
import Marketing from '../DesktopComponents/1-DT-Marketing';
import Promo from '../DesktopComponents/2-Promo';
import Branding from '../DesktopComponents/3-Branding';
import Social from '../DesktopComponents/4-Social';
import Develop from '../DesktopComponents/5-Develop';
const Carousel = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    //  centerMode: true,
    //  fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Layout>
      <SliderBox ref={sliderRef} {...settings}>
        <SliderItem key={1}>
          <Marketing />
        </SliderItem>
        <SliderItem key={2}>
          <Promo />
        </SliderItem>
        <SliderItem key={3}>
          <Branding />
        </SliderItem>
        <SliderItem key={4}>
          <Social />
        </SliderItem>
        <SliderItem key={5}>
          <Develop />
        </SliderItem>
      </SliderBox>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <img
            src={iconArrow}
            alt="button-left"
            style={{
              width: '152px',
            }}
          />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <img
            src={iconArrow}
            alt="button-right"
            style={{
              width: '152px',
            }}
          />
        </ButtonNext>
      </ButtonBox>
    </Layout>
  );
};
export default Carousel;
