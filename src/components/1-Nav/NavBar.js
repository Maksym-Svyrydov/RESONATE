import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import style from './Navbar.module.css';
import { Layout, NavContainer, NavigationLinks } from './Navbar.styled';
import { Loader } from '../Spiner/Spiner';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <Layout>
      <NavContainer>
        <Logo />
        <div
          className={nav ? [style.menu, style.active].join(' ') : [style.menu]}
        >
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
        </div>
        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </NavContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default Navbar;
