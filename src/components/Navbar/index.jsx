import React from 'react'
import { NavbarContainer } from './style';

const Navbar = (props) => {
    return (
        <NavbarContainer>
            <NavbarContainer.Product className='nav-title'>{props.name}</NavbarContainer.Product>
            <NavbarContainer.Categoriy className='nav-title'>{props.phone}</NavbarContainer.Categoriy>
            <NavbarContainer.Price className='nav-title'>{props.ordersCount}</NavbarContainer.Price>
            <NavbarContainer.Additional className='nav-title'>{props.status}</NavbarContainer.Additional>
            <NavbarContainer.Action className='nav-title'>{props.action}</NavbarContainer.Action>
        </NavbarContainer>
    )
}   

export default Navbar;
