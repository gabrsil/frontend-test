import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 60px;
    min-height: 100vh;
    background-color: #fff;

    @media (max-width: 1440px) {
        width: 100%;
    }
    @media (max-width: 1000px) {
        padding: 0 40px;
    }
    @media (max-width: 700px) {
        padding: 0 20px;
    }
`;
export const MainContent = styled.div`
    display: flex;
    margin-top: 90px;
    h1 {
        font-size: 3.1rem;
        font-weight: bold;
        color: #0b132a;
    }

    section.content-info {
        margin-right: 40px;

        p {
            line-height: 30px;
            margin: 20px 0;
            color: #4f5665;
        }
    }
    section.content-img {
        img {
            width: 600px;
        }
    }

    @media (max-width: 1300px) {
        h1 {
            font-size: 2.5rem;
        }
        section.content-img {
            img {
                width: 560px;
                height: 280px;
            }
        }
    }

    @media (max-width: 1100px) {
        h1 {
            font-size: 2rem;
        }
        section.content-img {
            img {
                width: 540px;
                height: 260px;
            }
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
        section.content-info {
            margin: 0;
            margin-top: 15px;
            width: 500px;

            p {
                margin: 8px 0 25px;
            }
        }
    }

    @media (max-width: 600px) {
        section.content-info {
            width: 100%;
            padding: 0 15px;
            min-width: 320px;
        }

        section.content-img {
            img {
                width: 100%;
                min-width: 320px;
                height: 230px;
            }
        }
    }
`;
export const FeedbackArea = styled.div`
    margin: 120px 0;
    width: 100%;
    section.text-area {
        text-align: center;
        margin: 0 auto;
        width: 500px;
        margin-bottom: 50px;

        h1 {
            color: #0b132a;
            font-weight: bold;
            font-size: 1.8rem;
            margin-bottom: 18px;
            line-height: 40px;
        }

        p {
            font-size: 1rem;
            color: #4f5665;
            line-height: 30px;
        }

        @media (max-width: 650px) {
            width: 100%;
        }

        @media (max-width: 400px) {
            h1 {
                font-size: 1.6rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }
`;
