import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  padding: 15px 5px;
  &:hover,
  &:focus {
    color: red;
  }
  &.active {
    color: #0d6efd;
    &:hover,
    &:focus {
      color: red;
    }
  }
`;
