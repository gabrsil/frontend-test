import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
    max-height: 230px;
    height: 230px;
    margin: 0 15px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 22px;

    p.person-description {
        color: var(--main-darkblue);
        font-size: 0.9rem;
        line-height: 30px;
    }

    @media (max-width: 400px) {
        p.person-description {
            line-height: 22px;
        }
        margin: 0 8px;
        height: 210px;
        padding: 15px;
    }

    :hover {
        border: 2px solid var(--main-lightgreen);
    }
`;

export const PersonHeader = styled.section`
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    h3.person-name {
        color: var(--main-darkblue);
        font-weight: bold;
        font-size: 0.9rem;
    }

    span.person-website {
        margin-top: 5px;
        color: #4f5665;
        font-size: 0.8rem;
    }

    section.rate-area {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 0.9rem;
            color: var(--main-darkblue);
            margin-right: 5px;
            line-height: 10px;
        }
    }

    @media (max-width: 400px) {
        margin-bottom: 15px;
    }
`;

export const StarIcon = styled(Star)`
    color: #fea250;
    width: 20px;
    height: 20px;
`;

interface IImageProps {
    image?: string;
}

export const PersonImage = styled('div')<IImageProps>`
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;

    @media (max-width: 400px) {
        width: 45px;
        height: 45px;
    }
`;
