import styled from 'styled-components';
import { ArrowLeft } from '@styled-icons/bootstrap';
import { ArrowRight } from '@styled-icons/bootstrap';

export const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 30px auto 0;

    button {
        color: var(--main-lightgreen);
        border: none;
        border: 2px solid var(--main-lightgreen);
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: 0.1s;

        :hover {
            background-color: var(--main-lightgreen);
            * {
                color: #fff;
            }
        }

        :first-child {
            margin-left: auto;
            margin-right: 10px;
        }
    }

    @media (max-width: 400px) {
        display: none;
    }
`;

export const LeftArrowIcon = styled(ArrowLeft)`
    width: 20px;
    height: 30px;
    color: var(--main-lightgreen);
`;
export const RightArrowIcon = styled(ArrowRight)`
    width: 20px;
    height: 30px;
    color: var(--main-lightgreen);
`;
