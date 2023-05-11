import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import style from './Navbar.module.css';
import { NavWrapper, NavigationLinks } from './Navbar.styled';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <NavWrapper>
      <Logo />
      <div
        className={nav ? [style.menu, style.active].join(' ') : [style.menu]}
      >
        <Suspense fallback={<div>Loading....</div>}>
          <NavigationLinks
            style={{
              display: 'flex',
              textDecoration: 'none',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '22px',
              textTransform: 'uppercase',
            }}
            to="/"
            end
          >
            Main
          </NavigationLinks>
        </Suspense>
        <Suspense fallback={<div>Loading....</div>}>
          <NavigationLinks
            style={{
              textDecoration: 'none',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '22px',
              textTransform: 'uppercase',
            }}
            to="/blog"
          >
            Blog
          </NavigationLinks>
        </Suspense>
        <Suspense fallback={<div>Loading....</div>}>
          <NavigationLinks
            style={{
              textDecoration: 'none',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '22px',
              textTransform: 'uppercase',
            }}
            to="/privacy"
          >
            Privacy
          </NavigationLinks>
        </Suspense>
      </div>

      <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </NavWrapper>
  );
};

export default Navbar;
