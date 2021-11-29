import React from 'react'
import { Container, AddProductWrapper, IconWrapper, SearchWrapper, SearchItem, FilterIconWrapper } from './style';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Filter } from '../../assets/icons/filter.svg';

const Header = () => {
    return (
        <Container>
            <AddProductWrapper>
                <IconWrapper>
                    <Plus />
                </IconWrapper>
                <p className='title'>Yangi buyurtma <br /> qo’shish</p>
            </AddProductWrapper>
            <SearchWrapper>
                <div className='search-item_wrapper'>
                    <SearchItem placeholder='Qidirish' />
                    <Search className='search-icon' />
                </div>
                <FilterIconWrapper>
                    <Filter />
                </FilterIconWrapper>
            </SearchWrapper>
        </Container>
    )
}
export default Header;
