import React from 'react'
import ProductItem from './ProductItem';
import Header from '../Header';
import { Container, LoadingButton, ProductItemsContainer } from './style';
import Navbar from '../Navbar';

const Maxsulotlar = () => {
    return (
        <Container>
            <Header/>
            <Navbar/>
            <ProductItemsContainer>
                <ProductItem/>
                <LoadingButton>Yana yuklash</LoadingButton>
            </ProductItemsContainer>
        </Container>
    )
}

export default Maxsulotlar;
