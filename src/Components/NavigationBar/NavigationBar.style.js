import styled from 'styled-components';
import { Nav, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { blue, darkBlack } from '../../theme/variables';
import media from '../../theme/media';

export const NavContainer = styled(Nav)`
  background-color: ${blue};
  margin: 0 auto;
  border-radius: 10px;
  position: relative;

`;

export const NavLinkItem = styled(NavLink)`
  color: #fff !important;
  font-size: 28px;
  text-transform: uppercase;
  line-height: 1;
  padding: 22px 10px 11px 12px;

  NavLink:hover {
    color: ${darkBlack};
  }
`;

export const HeadingContainer = styled(Row)`
  z-index: 100;
  position: relative;
  top: 0;
  width: 100%;
  background-color: aliceBlue;
  margin: 0;
`;

export const PngContainer = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${media.phone`
    display: none;
    `}
`;

export const PngPic = styled.img`
  width: 100px;
  height: 70px;
`;
