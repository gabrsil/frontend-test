import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Container } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <Menu right disableAutoFocus noOverlay>
                <a href="">Sobre</a>
                <a href="">Testemunhos</a>
                <a href="" className="nav-btn">
                    Àrea do comerciante
                </a>
            </Menu>
        </Container>
    );
};

export default SideBar;
