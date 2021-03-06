import React from 'react'
import {NavLink} from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { Container, IconWrapper, LogoContainer, LogoDiscription, LogoTitle} from './style';
import logo from '../../assets/imgs/main-logo.png';
import {ReactComponent as LogOut} from '../../assets/icons/log-out.svg';

const Sidebar = () => {
    let sidebarLength = sidebar.length;
    return (
        <Container>
            <LogoContainer>
                <LogoContainer.ImgWrapper>
                    <img className='logo-img' src={logo} alt="logo-img" />
                </LogoContainer.ImgWrapper>
                <LogoContainer.InfoWrapper>
                    <LogoTitle>Fast Food</LogoTitle>
                    <LogoDiscription>Online maxsulot sotuvi</LogoDiscription>
                </LogoContainer.InfoWrapper>
            </LogoContainer>
            {sidebar.map(({id, title, icon:Icon, pathname}) => {
                return (
                    <div style={{
                        borderLeft: '4px solid #FCB600',
                    }}>
                        <NavLink className={`nav-item ${({isActive}) => isActive ? 'active': 'noActive'}`}  key={id} to={pathname}>
                            <IconWrapper>
                                <Icon className='icon' />
                            </IconWrapper>
                            {title}
                        </NavLink>
                    </div>
                );
            })}
                <NavLink to='/' className='log-out'>
                    <IconWrapper>
                        <LogOut></LogOut>
                    </IconWrapper>
                    <p>Chiqish</p>
                </NavLink>
        </Container>
    )
}

export default Sidebar;
