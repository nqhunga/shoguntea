import styled from 'styled-components';
import { Container } from 'reactstrap';

import backgroundImage from '../../assets/pattern/bubble-tea-pattern2-min.jpg';

export const WrapperContainer = styled(Container)`
  position: relative;
  padding: 0;
  background: url(${backgroundImage});
  background-repeat: repeat;
  background-size: 150px;
`;

export const ContentWrapper = styled(Container)`

  position: relative;
  top: 0;
  height: auto;

  margin: 0;
  padding: 0;
`;
