import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

import ProductImage1 from '../../assets/product/1-min.jpg';
import ProductImage2 from '../../assets/product/2-min.jpg';
import ProductImage3 from '../../assets/product/3-min.jpg';

const ProductCard = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" height="300px" src={ProductImage1} alt="ShogunTea Vietnam" />
        <CardBody>
          <CardTitle>Trà Đào</CardTitle>
          <CardText>Trà vị Đào</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" height="300px" src={ProductImage2} alt="ShogunTea Vietnam" />
        <CardBody>
          <CardTitle>Trà Sữa Thường</CardTitle>
          <CardText>Trà Sữa Thường</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" height="300px" src={ProductImage3} alt="ShogunTea Vietnam" />
        <CardBody>
          <CardTitle>Trà Thái Xanh</CardTitle>
          <CardText>Trà Thái Xanh</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default ProductCard;
