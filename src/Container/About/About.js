import React,{Component} from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { GoogleComponent } from '../../Components/GoogleMap/GoogleMap';
import { AboutContainer, CardInfo, PicCard, CardContent } from './About.style';
import FrontPic from '../../assets/header/front-min.jpg';

export default class About extends Component {

    render() {
        return (
            <AboutContainer fluid={true}>
            <GoogleComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqFr2oJizxMbpHnpKqPOcr6QYAVI9RLeU&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              />
              <CardInfo>
                <PicCard top src={FrontPic} alt="ShogunTea Vietnam" />
                <CardBody>
                  <CardTitle>Trà Sữa ShogunTea</CardTitle>
                  <CardContent><span className="text-danger">Địa Chỉ:</span> 07 Lê Văn Lộc, Phường 9, Tp Vũng Tàu, BR-VT</CardContent>
                  <CardContent><span className="text-danger">ĐT</span> 02543 700 077</CardContent>
                  <CardContent><span className="text-danger">Mở Cửa</span> Tất cả các ngày trong tuần</CardContent>
                  <CardContent><span className="text-danger">Hours: </span> 9am - 10pm</CardContent>
                </CardBody>
              </CardInfo>
            </AboutContainer>
        );
    }
}
