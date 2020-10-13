import React, { useState } from 'react';

import { Container, LeftArrowIcon, RightArrowIcon } from './styles';

interface IProps {
    next: () => any;
    previous: () => any;
    currentSlide: number;
}

// eslint-disable-next-line react/prop-types
const CarouselBtn: React.FC<IProps> = ({ next, previous, currentSlide }) => {
    return (
        <Container>
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} id="prev-btn">
                <LeftArrowIcon />
            </button>
            <button id="next-btn" onClick={() => next()}>
                <RightArrowIcon />
            </button>
        </Container>
    );
};

export default CarouselBtn;
