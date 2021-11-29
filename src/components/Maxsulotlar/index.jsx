import React from 'react'
import ProductItem from './ProductItem';
import Header from '../Header';
import { Container, LoadingButton, ProductItemsContainer } from './style';

const Maxsulotlar = () => {
    return (
        <Container>
            <Header/>
            <ProductItemsContainer>
                <ProductItem/>
                <LoadingButton>Yana yuklash</LoadingButton>
            </ProductItemsContainer>
        </Container>
    )
}

export default Maxsulotlar;
