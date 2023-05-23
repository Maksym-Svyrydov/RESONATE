import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLinks = styled(NavLink)`
  color: #5736a3;
  padding: 8px;
  &.active {
    background: #5736a3;
    color: #ebd8ff;
    border-radius: 8px;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  position: relative;
  top: 0;
  left: 0px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
export const NavContainer = styled.header`
  min-height: 64px;
  position: fixed;
  display: flex;
  min-width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 10px, auto;
  padding-left: 42px;
  padding-right: 55px;
  flex-direction: row;
  z-index: 10;
  outline: 1px solid tomato;
`;
