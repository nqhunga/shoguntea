import React,{Component} from 'react';
import { Row, Button } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";
import { FooterContainer, ElementContainer, ElementContainer2, HeadLine, ContentCont, ContentCont2, Logo, LinkSocial } from './Footer.style';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faCopyright, faArrowUp } from '@fortawesome/fontawesome-free-solid';
import logo from '../../assets/logo-min.png';


export default class Footer extends Component {

    render() {
        return (
            <FooterContainer fluid={true}>
              <Row>
                <ElementContainer2 md="5" sm="6" xs="6">
                  <Logo src={logo} alt="ShogunTea Vietnam"/>
                  <ContentCont>
                    <p><FontAwesomeIcon icon={faCopyright} size="lg"/> ShogunTea</p>
                    <p>Creator: Hung Nguyen</p>
                  </ContentCont>

                </ElementContainer2>
                <ElementContainer md="5" sm="6" xs="6">
                <HeadLine>Liên kết với chúng tôi</HeadLine>
                <ContentCont2>
                  <LinkSocial href="https://www.facebook.com/ShogunTeaStore" target="_blank" ><FontAwesomeIcon icon={faFacebookSquare} size="3x"/></LinkSocial>
                  <LinkSocial href="https://www.instagram.com/shogunteavt/" target="_blank" ><FontAwesomeIcon icon={faInstagram} size="3x"/></LinkSocial>
                </ContentCont2>
                </ElementContainer>
                <ElementContainer md="2" sm="12" xs="12">
                  <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
                    <Button outline color="danger"><FontAwesomeIcon icon={faArrowUp} size="lg"/>Top Page!</Button>
                  </ScrollUpButton>
                </ElementContainer>
              </Row>
            </FooterContainer>
        );
    }
}
