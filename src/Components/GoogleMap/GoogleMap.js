import React,{Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { CardImg, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


export const GoogleComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 10.36965 , lng:107.08406 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 10.36965 , lng: 107.08406 }} />}
  </GoogleMap>

));
