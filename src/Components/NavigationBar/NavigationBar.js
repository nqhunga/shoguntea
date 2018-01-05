import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as Link,
  Row, Col
} from 'reactstrap';

import png1 from '../../assets/decoration/bubble-tea7-min.png';
import png2 from '../../assets/decoration/bubble-tea2-min.png';
import png3 from '../../assets/decoration/bubble-tea3-min.png';
import png4 from '../../assets/decoration/bubble-tea4-min.png';
import png5 from '../../assets/decoration/bubble-tea5-min.png';
import png6 from '../../assets/decoration/bubble-tea6-min.png';

import {
  NavContainer,
  NavLinkItem,
  HeadingContainer,
  PngContainer,
  PngPic
 } from './NavigationBar.style';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <HeadingContainer>
        <PngContainer md="3" xs="0" sm="0">
          <PngPic className="header-png" src={png1} alt="ShogunTea Vietnam"/>
          <PngPic className="header-png" src={png2} alt="ShogunTea Vietnam"/>
          <PngPic className="header-png" src={png3} alt="ShogunTea Vietnam"/>
        </PngContainer>
        <Col md="6" xs="12" sm="12">
          <Navbar color="faded" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavContainer className="justify-content-center" navbar>
                <NavItem>
                  <NavLinkItem className="nav-link" to="/">Trang chủ</NavLinkItem>
                </NavItem>
                <NavItem>
                  <NavLinkItem className="nav-link" to="/about">Địa Chỉ</NavLinkItem>
                </NavItem>
                <NavItem>
                  <NavLinkItem className="nav-link" to="/product">Menu</NavLinkItem>
                </NavItem>

              </NavContainer>
            </Collapse>
          </Navbar>
        </Col>
        <PngContainer md="3" xs="0" sm="0">
          <PngPic className="header-png" src={png3} alt="ShogunTea Vietnam"/>
          <PngPic className="header-png" src={png2} alt="ShogunTea Vietnam"/>
          <PngPic className="header-png" src={png1} alt="ShogunTea Vietnam"/>
        </PngContainer>

      </HeadingContainer>
    );
  }
}
