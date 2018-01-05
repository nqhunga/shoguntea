import styled from 'styled-components';
import {Container, Col} from 'reactstrap';
import {Div} from '../../theme/grid';
import {red, darkBlack} from '../../theme/variables';
import AboutImage from '../../assets/header/headershogun-min.jpg';

export const AboutContainer = styled(Container)`
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  background: transparent;
`;

export const ImageAbout = styled(Div)`
  background-image: url(${AboutImage});
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: bottom center;
  min-height: 500px;
`;

export const ContentAbout = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${darkBlack};
  color: ${red};
  padding: 0 15px 0 15px;
`;

export const HeadlineAbout = styled.h2`
text-align: center;
`;

export const AboutInner = styled(Div)`
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
border-radius: 15px;
overflow: hidden;
`;
