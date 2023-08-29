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
import logoMarloo from '../../img/Customers/marludesign.svg';
import avangard from '../../img/Customers/Avangard.svg';
import prime from '../../img/Customers/BluePrime.svg';
import gleam from '../../img/Customers/Gleam.svg';
import nika from '../../img/Customers/Nika.svg';
import spribe from '../../img/Customers/SPRIBE.svg';
import vikno from '../../img/Customers/Vikno.svg';
import cashyou from '../../img/Customers/cashyou.svg';
import intericc from '../../img/Customers/intericco.svg';
import orion from '../../img/Customers/orioncity.svg';
import startup from '../../img/Customers/startupinc.svg';
import step from '../../img/Customers/stepINVEST_logo_1 2.svg';
import uuutoo from '../../img/Customers/uuutoo.svg';
// import iconButton from '../../img/icons/icon-left-61x61.svg';
import iconArrow from '../../img/icons/arrow-left.svg';

export const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    lazyLoad: true,
    // fade: true,
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
          slidesToShow: 1,
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
          <LogoImg src={avangard} />
        </LogoItem>

        <LogoItem key={4}>
          <LogoImg src={prime} />
        </LogoItem>
        <LogoItem key={5}>
          <LogoImg src={gleam} />
        </LogoItem>
        <LogoItem key={6}>
          <LogoImg src={nika} />
        </LogoItem>
        <LogoItem key={7}>
          <LogoImg src={spribe} />
        </LogoItem>
        <LogoItem key={8}>
          <LogoImg src={vikno} />
        </LogoItem>
        <LogoItem key={9}>
          <LogoImg src={cashyou} />
        </LogoItem>
        <LogoItem key={10}>
          <LogoImg src={intericc} />
        </LogoItem>
        <LogoItem key={11}>
          <LogoImg src={orion} />
        </LogoItem>
        <LogoItem key={12}>
          <LogoImg src={startup} />
        </LogoItem>
        <LogoItem key={13}>
          <LogoImg src={step} />
        </LogoItem>
        <LogoItem key={14}>
          <LogoImg src={uuutoo} />
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
