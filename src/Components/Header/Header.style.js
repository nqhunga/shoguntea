import styled from 'styled-components';
import { Container } from 'reactstrap';

import { blue, darkBlack, red } from '../../theme/variables';
import HeaderImage from '../../assets/header/header_img5-min.jpg';

export const HeaderImageContainer = styled(Container)`
  padding-bottom: 70px;

  background-image: url(${HeaderImage});
  min-height: 500px;
  -moz-background-size: cover;
    -o-background-size: cover;
       background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  padding: 70px 0 70px 0;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  z-index: 3;
  flex-direction: column;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 400px;

`;

export const Headline = styled.h2`
  color: ${red};
  font-weight: bold;
`;
