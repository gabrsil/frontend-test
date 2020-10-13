import React from 'react';

import { Container, UserIcon, LocationIcon, ServerIcon } from './styles';

const QuantitativeArea: React.FC = () => {
    return (
        <Container>
            <section className="numbers-item">
                <div className="icon-area">
                    <UserIcon />
                </div>
                <section className="info-area">
                    <h3 className="number-info">900+</h3>
                    <span className="text-info">Entregadores</span>
                </section>
            </section>
            <section className="numbers-item">
                <div className="icon-area">
                    <LocationIcon />
                </div>
                <section className="info-area">
                    <h3 className="number-info">300+</h3>
                    <span className="text-info">Comerciantes</span>
                </section>
            </section>
            <section className="numbers-item">
                <div className="icon-area">
                    <ServerIcon />
                </div>
                <section className="info-area">
                    <h3 className="number-info">+70%</h3>
                    <span className="text-info">Conversão</span>
                </section>
            </section>
        </Container>
    );
};

export default QuantitativeArea;
