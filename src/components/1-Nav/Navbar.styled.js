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
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const NavContainer = styled.header`
  min-height: 64px;
  position: fixed;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px, auto;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  flex-direction: row;
`;
