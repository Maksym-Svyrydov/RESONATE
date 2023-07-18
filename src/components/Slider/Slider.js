import React from 'react';
import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  //   WrapperReview,
  LogoCustomers,
  LogoItem,
  LogoImg,
  ButtonBox,
  ButtonPreview,
  ButtonNext,
} from './Slider.styled';
import logoZoo from '../../img/kharkivzoo_logo.svg';
import logoMarloo from '../../img/marludesign_logo.svg';
// import iconButton from '../../img/icons/icon-left-61x61.svg';
import iconArrow from '../../img/icons/arrow-left.svg';

export const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
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
    <>
      <LogoCustomers ref={sliderRef} {...settings}>
        <LogoItem key={1}>
          <LogoImg src={logoZoo} />
        </LogoItem>
        <LogoItem key={2}>
          <LogoImg src={logoMarloo} />
        </LogoItem>

        <LogoItem key={3}>
          <LogoImg src={logoZoo} />
        </LogoItem>

        <LogoItem key={4}>
          <LogoImg src={logoMarloo} />
        </LogoItem>
      </LogoCustomers>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <img src={iconArrow} alt="button-left" />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <img src={iconArrow} alt="button-right" />
        </ButtonNext>
      </ButtonBox>
    </>
  );
};
