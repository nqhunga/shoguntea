import styled from 'styled-components';
import { Container, TabContent, Alert } from 'reactstrap';
import { darkBlack, red } from '../../theme/variables';

export const ListProductContainer = styled(Container)`
  padding: 70px 0 0px 0;
  display: flex;
  justify-content: center;
`;

export const TabContainer = styled(Container)`
  width: 100%;
  min-height: 400px;

`;

export const ImgParallax = styled.img`
  width: 100%;
`;

export const TabMenu = styled(TabContent)`
  padding: 20px 50px 20px 50px;
`;

export const Headline = styled.h2`
  padding: 10px;
  font-size: 28px;
  background-color: ${darkBlack};
  color: ${red};
  margin: 0 auto;
  width: 100px;
  font-size: 32px;
  text-align: center;
  border-radius: 10px;
`;

export const TraSua = styled(Alert)`

`;
