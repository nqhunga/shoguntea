import styled from 'styled-components';
import { Card, Container, CardImg, CardSubtitle } from 'reactstrap';

export const CardInfo = styled(Card)`
  position: absolute;
  z-index: 10;
  top: 20vh;
  right: 10px;
`;

export const AboutContainer = styled(Container)`
  padding: 0;
  height: 100%;
`;

export const PicCard = styled(CardImg)`
  width: 400px;
  height: 250px;
`;

export const CardContent = styled(CardSubtitle)`
  line-height: 30px;
`;
