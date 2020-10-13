import React from 'react';
import Logo from '../../assets/logo 1.png';
import {
    Container,
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    Wrapper,
    List,
    MenuList,
    IconArea,
    FooterSide,
} from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <FooterSide>
                    <section className="logo-area">
                        <img src={Logo} alt="logo" className="header-logo" />
                        <span>2020 - Santos/SP </span>
                    </section>
                    <section className="social-area">
                        <IconArea>
                            <InstagramIcon />
                        </IconArea>
                        <IconArea>
                            <FacebookIcon />
                        </IconArea>
                        <IconArea>
                            <TwitterIcon />
                        </IconArea>
                    </section>
                </FooterSide>

                <section className="footer-menu">
                    <MenuList>
                        <h3>Sistema Loocal</h3>
                        <List>
                            <li>Guia rápido</li>
                            <li>FAQ</li>
                            <li>Tutoriais</li>
                            <li>Política de privacidade</li>
                            <li>Termos de serviço</li>
                        </List>
                    </MenuList>
                    <MenuList>
                        <h3>Para entregadores</h3>
                        <List>
                            <li>Aplicativo móvel</li>
                            <li>FAQ</li>
                            <li>Tutoriais</li>
                            <li>Política de privacidade</li>
                            <li>Termos de serviço</li>
                        </List>
                    </MenuList>
                    <MenuList>
                        <h3>Para entregadores</h3>
                        <List>
                            <li>Equipe</li>
                            <li>Novidades</li>
                        </List>
                    </MenuList>
                </section>
            </Wrapper>
        </Container>
    );
};

export default Footer;
