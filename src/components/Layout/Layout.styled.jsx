import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Navigation = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  text-align: center;
  border-radius: 10px;

  &.active {
    color: white;
    background-color: #911116;
  }
`;
