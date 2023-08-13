import { useState } from 'react';
import Hero from '../../components/MainComponents/1-Hero/Hero';
import Marketing from '../../components/MainComponents/2-Promo/1-Marketing';
import Promo from '../../components/MainComponents/2-Promo/2-Promo';
import Branding from '../../components/MainComponents/2-Promo/3-Branding';
import Social from '../../components/MainComponents/2-Promo/4-Social';
import Develop from '../../components/MainComponents/2-Promo/5-Develop';
import Cases from '../../components/MainComponents/3-Cases/Cases';
import Proud from '../../components/MainComponents/4-Customers/2-Proud';
import Profit from '../../components/MainComponents/5-Profit/Profit';
import Reviews from '../../components/MainComponents/6-Reviews/Reviews';
import Articles from '../../components/MainComponents/7-Articles/Articles';
import Footer from '../../components/MainComponents/8-Footer/Footer';
import Carousel from '../../components/MainComponents/Carousel/Carousel';

const Main = () => {
  const [screen, setScreen] = useState(() => window.innerWidth);
  useState(() => setScreen(window.innerWidth));
  console.log(screen);
  if (screen < 1919) {
    return (
      <>
        <Hero />
        <Marketing />
        <Promo />
        <Branding />
        <Social />
        <Develop />
        <Cases />
        <Proud />
        <Profit />
        <Reviews />
        <Articles />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Hero />

      <Carousel />
    </>
  );
};
export default Main;
