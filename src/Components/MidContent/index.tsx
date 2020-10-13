import React from 'react';
import Ilustration2 from '../../assets/Illustration 2.svg';

import { Container, CheckIcon } from './styles';

const MidContent: React.FC = () => {
    return (
        <Container>
            <section className="img-side">
                <img src={Ilustration2} alt="" />
            </section>
            <section className="content-side">
                <h1>Gerencie as entregas do seu comércio</h1>
                <p className="subtitle">Com a Loocal você possui total controle sobre suas entregas</p>
                <ul className="info-list">
                    <li>
                        <CheckIcon />
                        <p className="item-info">Insira créditos na plataforma de modo pré-pago</p>
                    </li>
                    <li>
                        <CheckIcon />
                        <p className="item-info">Entregadores segmentados por região</p>
                    </li>
                    <li>
                        <CheckIcon />
                        <p className="item-info">Dashboard completa com métricas sobre vendas</p>
                    </li>
                    <li>
                        <CheckIcon />
                        <p className="item-info">Acompanhamento em tempo real do seu pedido</p>
                    </li>
                </ul>
            </section>
        </Container>
    );
};

export default MidContent;
