import React,{Component} from 'react';
import { ProductContainer, MenuPic} from './Product.style';
import Menu from '../../assets/header/menu-min.jpg';
export default class Product extends Component {

    render() {
        return (
            <ProductContainer fluid={true}>
                <MenuPic src={Menu} alt="ShogunTea Vietnam"/>
            </ProductContainer>
        );
    }
}
