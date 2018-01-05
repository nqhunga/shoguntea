import styled from 'styled-components';
import { Container, Col } from 'reactstrap';
import {darkBlack, red} from '../../theme/variables';
import {Div} from '../../theme/grid';
import media from '../../theme/media';

export const LinkSocial = styled.a`
  color: ${darkBlack};
`;

export const FooterContainer = styled(Container)`
  padding: 0;
  background-color : aliceBlue;
  color: ${darkBlack};
  padding: 10px 20px;

  ${media.tablet`
    font-size: 10px;
    `}
`;

export const ElementContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: center;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
    `}
`;

export const ElementContainer2 = styled(Col)`
  display: flex;
  flex-direction: row;
  ${media.tablet`
    padding: 0;
    `}
`;

export const HeadLine = styled.h1`
  margin: 0;
`;

export const ContentCont = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentCont2 = styled(Div)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    margin-right: 20px;
  }

  a:nth-child(1):hover {
    color: #3b5998;
  }
  a:nth-child(2):hover {
    color: #e1306c;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 120px;

  ${media.tablet`
    width: 150px;
    height: 80px;
    `}
`;
