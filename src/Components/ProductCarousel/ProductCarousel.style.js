import styled from 'styled-components';
import { Container, CardColumns, Card } from 'reactstrap';
import Slider from 'react-slick';
import { Div } from '../../theme/grid';
import media from '../../theme/media';

export const CarouselContainer = styled(CardColumns)`
  min-height: 400px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;

  ${media.tablet`
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    `}
`;

export const CarouselCard = styled(Card)`

  height: 200px;
  width: 150px;
  text-align: center;

  img {
    width: 100%;
    height: 150px;
    padding: 10px 10px 0 10px;
  }

  ${media.tablet`
    height: 150px;
    width: 200px;
    text-align: center;

    img {
      width: 100%;
      height: 100px;
      padding: 10px 10px 0 10px;
    }
    `}
`;
