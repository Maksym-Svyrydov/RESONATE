import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import style from './Navbar.module.css';
import { Layout, NavContainer, NavigationLinks } from './Navbar.styled';
import { Loader } from '../Spiner/Spiner';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const closeEsc = (e) => {
      if (e.code === 'Escape') {
        return setNav(!nav);
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => {
      window.removeEventListener('keydown', closeEsc);
    };
  }, [nav]);

  return (
    <Layout onClick={() => setNav(!nav)}>
      <NavContainer
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setNav(!nav);
          }
        }}
      >
        <Logo />
        <div
          onClick={(e) => e.stopPropagation()}
          className={nav ? [style.menu, style.active].join(' ') : [style.menu]}
        >
          <NavigationLinks to="/" end onClick={() => setNav(!nav)}>
            Main
          </NavigationLinks>

          <NavigationLinks to="/blog" onClick={() => setNav(!nav)}>
            Blog
          </NavigationLinks>

          <NavigationLinks to="/privacy" onClick={() => setNav(!nav)}>
            Privacy
          </NavigationLinks>
        </div>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
      </NavContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default Navbar;
