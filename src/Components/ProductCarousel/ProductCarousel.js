import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardColumns } from 'reactstrap';
import {CarouselContainer, CarouselCard } from './ProductCarousel.style';
import Thach1 from '../../assets/thach/thach1-min.jpg';
import Thach2 from '../../assets/thach/thach2-min.jpg';
import Thach3 from '../../assets/thach/thach3-min.jpg';
import Thach4 from '../../assets/thach/thach4-min.jpg';
import Thach5 from '../../assets/thach/thach5-min.jpg';
import Thach6 from '../../assets/thach/thach6-min.jpg';
import Thach7 from '../../assets/thach/thach7-min.jpg';
import Thach8 from '../../assets/thach/thach8-min.jpg';
import Thach9 from '../../assets/thach/thach9-min.jpg';
import Thach10 from '../../assets/thach/thach10-min.jpg';

export default class ProductCarousel extends Component {
  render() {
    var ThachLists = [
      {
        name: "Thạch Socola",
        src: Thach1
      },
      {
        name: "Thạch Phô Mai Nhiệt Đới",
        src: Thach2
      },
      {
        name: "Thạch Phô Mai Cà Phê",
        src: Thach3
      },
      {
        name: "Thạch Xí Muội",
        src: Thach4
      },
      {
        name: "Thạch Nho",
        src: Thach5
      },
      {
        name: "Thạch Flan",
        src: Thach6
      },
      {
        name: "Thạch Pudding",
        src: Thach7
      },
      {
        name: "Thạch Dứa",
        src: Thach8
      },
      {
        name: "Thạch Củ Năng",
        src: Thach9
      },
      {
        name: "Thạch Trân Châu",
        src: Thach10
      }
    ];

    return (
      <CarouselContainer>
        {ThachLists.map((listvalue, index) => {
          return(
          <CarouselCard className="thach-card" key={index}>
            <CardImg top width="100%" src={listvalue.src} alt="ShogunTea Vietnam"/>
            <CardTitle>{listvalue.name}</CardTitle>
          </CarouselCard>
        );
        })}

      </CarouselContainer>
    );
  }
}
