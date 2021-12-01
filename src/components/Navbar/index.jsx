import React from 'react'
import { NavbarContainer } from './style';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarContainer.Product className='nav-title'>Maxsulot</NavbarContainer.Product>
            <NavbarContainer.Categoriy className='nav-title'>Kategoriya</NavbarContainer.Categoriy>
            <NavbarContainer.Price className='nav-title'>Narxi</NavbarContainer.Price>
            <NavbarContainer.Additional className='nav-title'>Qo'shimcha</NavbarContainer.Additional>
            <NavbarContainer.Action className='nav-title'>Action</NavbarContainer.Action>
        </NavbarContainer>
    )
}   

export default Navbar;
