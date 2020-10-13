import React from 'react';

import { Container } from './styles';

const BottomCard: React.FC = () => {
    return (
        <Container>
            <section className="text-side">
                <h1 className="h1-title">
                    Faça parte da revolução <span>🎉</span>
                </h1>
                <p className="subtitle">Traga seu comércio para a Loocal</p>
            </section>
            <section className="button-side">
                <button className="global-btn">Quero fazer parte</button>
            </section>
        </Container>
    );
};

export default BottomCard;
