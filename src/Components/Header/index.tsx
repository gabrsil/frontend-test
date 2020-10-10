import React from 'react';
import Logo from '../../assets/logo 1.png'
import { Container, NavBar, NavItem } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <img src={Logo} alt="logo" className="header-logo"/>
        <NavBar>
            <NavItem>
                <a href="">Sobre</a>
            </NavItem>
            <NavItem>
                <a href="">Testemunhos</a> 
            </NavItem>
            <NavItem>
                <a href="" className="nav-btn">Àrea do comerciante</a> 
            </NavItem>
        </NavBar>
    </Container>
    );
}

export default Header;