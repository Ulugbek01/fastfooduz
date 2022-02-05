import React from 'react'
import ProductItem from './ProductItem';
import Header from '../Header';
import { Container, ProductItemsContainer } from './style';
import Navbar from '../Navbar';

const Maxsulotlar = () => {
    return (
        <Container>
            <Header text="Yangi maxsulot" />
            <Navbar/>
            <ProductItemsContainer>
                <ProductItem/>
            </ProductItemsContainer>
        </Container>
    )
}

export default Maxsulotlar;
