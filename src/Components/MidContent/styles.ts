import styled from 'styled-components';
import { CheckCircleFill } from '@styled-icons/bootstrap';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 120px auto 0;

    section.img-side {
        display: flex;
        justify-content: center;
        margin-right: 50px;
    }

    section.content-side {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 0 15px;

        h1 {
            font-weight: bold;
            font-size: 2.2rem;
            line-height: 50px;
            margin-bottom: 15px;
            color: var(--main-darkblue);
        }

        p.subtitle {
            color: #4f5665;
            line-height: 30px;
            margin-bottom: 15px;
        }

        li {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            p.item-info {
                margin-left: 10px;
                color: #4f5665;
                font-size: 0.9rem;
            }
        }
    }

    ul {
        list-style-type: none;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;

        section.img-side {
            margin: 0;
        }

        section.content-side {
            width: 500px;
            margin-top: 25px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;

        section.content-side {
            width: 100%;
            min-width: 320px;
        }

        section.img-side {
            img {
                width: 100%;
                min-width: 320px;
            }
        }
    }
`;

export const CheckIcon = styled(CheckCircleFill)`
    color: var(--main-lightgreen);
    width: 20px;
    height: 20px;
`;
