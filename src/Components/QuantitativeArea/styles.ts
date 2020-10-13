import styled from 'styled-components';
import { LocationPin } from '@styled-icons/entypo';
import { Server } from '@styled-icons/boxicons-regular';
import { User } from '@styled-icons/boxicons-solid';

export const Container = styled.div`
    margin: 80px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 160px;
    background-color: #ffffff;
    box-shadow: 0px 8px 30px -38px rgba(0, 0, 0, 0.75);

    section.numbers-item {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #eeeff2;

        :last-child {
            border: none;
        }

        section.info-area {
            margin-left: 25px;

            h3.number-info {
                font-weight: bold;
                color: var(--main-darkblue);
                font-size: 1.4rem;
                margin-bottom: 5px;
            }

            span.text-info {
                color: #4f5665;
                font-size: 1.1rem;
            }
        }
    }

    div.icon-area {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #c6ffd8;
    }

    @media (max-width: 1000px) {
        margin: 60px auto;
        section.numbers-item {
            section.info-area {
                margin-left: 10px;
                h3.number-info {
                    font-size: 1.2rem;
                }
                span.text-info {
                    font-size: 1rem;
                }
            }
        }
    }

    @media (max-width: 600px) {
        section.numbers-item {
            flex-direction: column;

            section.info-area {
                text-align: center;
                margin: 10px 0;
            }
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: 300px;
        margin: 140px 0;

        section.numbers-item {
            flex-direction: column;
            section.info-area {
                text-align: center;
                margin: 10px 0;
            }
            border: none;
            margin: 0;
            margin-bottom: 15px;
            border-bottom: 1px solid #eeeff2;
        }
    }
`;

export const LocationIcon = styled(LocationPin)`
    color: var(--main-lightgreen);
    width: 20px;
    height: 20px;

    @media (max-width: 1000px) {
        width: 18px;
        height: 18px;
    }
`;

export const ServerIcon = styled(Server)`
    color: var(--main-lightgreen);
    width: 20px;
    height: 20px;

    @media (max-width: 1000px) {
        width: 18px;
        height: 18px;
    }
`;

export const UserIcon = styled(User)`
    color: var(--main-lightgreen);
    width: 20px;
    height: 20px;

    @media (max-width: 1000px) {
        width: 18px;
        height: 18px;
    }
`;
