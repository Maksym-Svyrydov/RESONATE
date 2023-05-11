import React, { useState } from 'react';
import style from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import LogoText from '../../assets/logo_text.png';
import styled from 'styled-components';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const StyledLink = styled(NavLink)`
    color: #5736a3;
    padding: 8px;

    &.active {
      background: #5736a3;
      color: #ebd8ff;
      border-radius: 8px;
    }
  `;
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.box}>
            <div className={style.logo_image}>
              <img src={Logo} alt="/" />
              <img src={LogoText} alt="/" />
            </div>
            <ul
              className={
                nav ? [style.menu, style.active].join(' ') : [style.menu]
              }
            >
              <StyledLink
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
              </StyledLink>
              <StyledLink
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
              </StyledLink>
              <StyledLink
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
              </StyledLink>

              {/* <li>
              <a href="##">Product</a>
            </li>
            <li>
              <a href="##">About Us</a>
            </li>
            <li>
              <a href="##">Customers</a>
            </li>
            <li>
              <a href="##">Price</a>
            </li>
            <li>
              <a href="##">Contacts</a>
            </li> */}
            </ul>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
          </div>
        </div>
      </header>
      <div>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Navbar;
