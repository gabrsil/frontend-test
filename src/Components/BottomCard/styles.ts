import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    width: 1000px;
    margin: 10px auto;
    height: 230px;
    box-shadow: 0px 8px 30px -25px rgba(13, 16, 37, 0.75);
    section.text-side {
        width: 50%;
        padding-left: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1.h1-title {
            color: #0b132a;
            font-size: 2.1rem;
            font-weight: bold;
            width: 50%;
        }

        p.subtitle {
            color: #4f5665;
            font-size: 1rem;
            margin-top: 15px;
        }
    }

    section.button-side {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 370px;
            height: 60px;
        }
    }

    @media (max-width: 1140px) {
        width: 100%;
    }

    @media (max-width: 1000px) {
        margin: 35px auto;
        section.text-side {
            padding-left: 40px;
            h1.h1-title {
                font-size: 1.8rem;
            }
        }

        section.button-side {
            width: 50%;
            button {
                width: 365px;
                height: 55px;
            }
        }
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        section.text-side {
            padding: 0;
            width: 80%;
            text-align: center;
            margin-bottom: 20px;
            h1.h1-title {
                width: 100%;
            }
        }
        section.button-side {
            width: 100%;
            button {
                box-shadow: 0px 30px 25px -18px rgba(0, 165, 54, 0.35);
            }
        }
    }
`;
