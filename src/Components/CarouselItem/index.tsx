import React from 'react';

import { Container, StarIcon, PersonImage, PersonHeader } from './styles';

interface IPersonParams {
    image: string;
    firstname: string;
    lastname: string;
    website: string;
    rate: number;
    description: string;
}

// eslint-disable-next-line react/prop-types
const CarouselItem: React.FC<IPersonParams> = ({ image, firstname, lastname, website, rate, description }) => {
    return (
        <Container className="carousel-item">
            <PersonHeader>
                <PersonImage image={image} />
                <section className="person-info">
                    <h3 className="person-name">{`${firstname} ${lastname}`}</h3>
                    <span className="person-website">{website}</span>
                </section>
                <section className="rate-area">
                    <span className="rate">{rate}</span>
                    <StarIcon />
                </section>
            </PersonHeader>
            <p className="person-description">{description}</p>
        </Container>
    );
};

export default CarouselItem;
