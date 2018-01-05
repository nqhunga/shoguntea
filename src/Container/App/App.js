import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import { WrapperContainer, ContentWrapper } from './App.style';
import './App.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <WrapperContainer fluid={true}>
          <NavigationBar />
          <ContentWrapper fluid={true}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </ContentWrapper>
          <Footer />
        </WrapperContainer>
      </HashRouter>
    );
  }
}

export default App;
