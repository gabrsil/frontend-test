import React from 'react';

import { Container } from './styles';
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselBtn from '../CarouselBtn';

interface CarouselProps {
    children: any;
}

const responsive = {
    MediumDesktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3,
    },
    SmallDesktop: {
        breakpoint: { max: 1200, min: 850 },
        items: 2,
    },
    SmallDesktop2: {
        breakpoint: { max: 850, min: 280 },
        items: 1,
    },
};

const ButtonGroup = ({ next, previous, ...rest }: any) => {
    const {
        carouselState: { currentSlide },
    } = rest;
    return <CarouselBtn next={next} previous={previous} currentSlide={currentSlide} />;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    return (
        <Container className="carousel-cont">
            <CarouselMulti
                itemClass="carousel-item"
                containerClass="carousel-cont"
                children={children}
                responsive={responsive}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
            />
        </Container>
    );
};

export default Carousel;
