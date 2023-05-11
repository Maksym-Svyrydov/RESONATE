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
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  padding: 0 10px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;
