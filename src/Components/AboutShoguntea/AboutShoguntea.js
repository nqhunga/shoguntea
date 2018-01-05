import React,{Component} from 'react';
import {AboutContainer, ImageAbout, ContentAbout, HeadlineAbout, AboutInner } from './AboutShoguntea.style.js';

import {Container, Row, Col} from 'reactstrap';


export default class About extends Component {

    render() {
        return (
            <AboutContainer fluid={true}>
              <Container className="about-wrapper">
              <AboutInner>
              <Row>
                <Col md="7" style={{padding:0}}>
                  <ImageAbout />
                </Col>
                <ContentAbout md="5">
                  <HeadlineAbout>Chúng Tôi là ShogunTea!</HeadlineAbout>
                  <p>Với mong muốn đem lài làn gió mới cho thị trường trà sữa đã và đang bùng nổ hiện nay, ShogunTea mong muốn mang đến cho các bạn, những sản phẩm trà sữa thạch handmade chất lượng cao nhất.
                  Với quan niệm an toàn chất lượng sản phẩm là giá trị cốt lõi của sản phẩm ShogunTea, chúng tôi cam kết về mặt an toàn thực phẩm cũng như hương vị tự nhiên nhất.
                  Xin mời các bạn hãy đến số 07 Lê Văn Lộc tại thành phố biển Vũng Tàu để thư giãn và vui vẻ cùng bạn bè và người thân bên ly trà sữa ShogunTea.
                   </p>
                   <h1>Xin kính chào quý khách!</h1>
                </ContentAbout>
              </Row>
              </AboutInner>

              </Container>
            </AboutContainer>
        );
    }
}
