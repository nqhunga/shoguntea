import React,{Component} from 'react';

import { HomeWrapper } from './Home.style.js';
import Header from '../../Components/Header/Header';
import About from '../../Components/AboutShoguntea/AboutShoguntea';
import ListProduct from '../../Components/ListProduct/ListProduct';
export default class Home extends Component {

    render() {
        return (
            <HomeWrapper fluid={true}>
              <Header />
              <About />
              <ListProduct />
            </HomeWrapper>
        );
    }
}
