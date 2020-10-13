import React, { useState } from 'react';

import Logo from '../../assets/logo 1.png';
import { Container, NavBar, NavItem, MenuIcon } from './styles';
import SideBar from '../SideBar';

const Header: React.FC = () => {
    return (
        <Container id="header-cont">
            <img src={Logo} alt="logo" className="header-logo" />

            <NavBar>
                <NavItem>
                    <a className="nav-link" href="">
                        Sobre
                    </a>
                </NavItem>
                <NavItem>
                    <a className="nav-link" href="">
                        Testemunhos
                    </a>
                </NavItem>
                <NavItem>
                    <a href="" className="nav-btn">
                        Àrea do comerciante
                    </a>
                </NavItem>
            </NavBar>
            <SideBar />
        </Container>
    );
};

export default Header;
