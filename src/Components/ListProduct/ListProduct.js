import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import {ListProductContainer, TabContainer, TabMenu, ImgParallax, Headline, TraSua } from './ListProduct.style';
import ProductCard from '../ProductCard/ProductCard';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import ImageParallax from '../../assets/header/bubble-tea-header2-min.jpg';

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {


    return (
      <ListProductContainer fluid={true}>

        <Parallax strength={200}>
          <Background>
          <ImgParallax src={ImageParallax} alt="ShogunTea Vietnam"/>
          </Background>
          <Headline>Menu</Headline>
          <br/>
          <TabContainer>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Trà Sữa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }} >
                  Thạch
                </NavLink>
              </NavItem>
            </Nav>
            <TabMenu activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <TraSua color="success">3 Loại Trà Sữa</TraSua>
                    <ProductCard />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <TraSua color="success">10 Loại Thạch</TraSua>
                    <ProductCarousel />
                  </Col>
                </Row>
              </TabPane>
            </TabMenu>
          </TabContainer>
        </Parallax>

      </ListProductContainer>
    );
  }
}
