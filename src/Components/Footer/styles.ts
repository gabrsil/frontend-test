import styled from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos';
import { Instagram } from '@styled-icons/icomoon';
import { Twitter } from '@styled-icons/boxicons-logos';

export const FacebookIcon = styled(Facebook)`
    color: var(--main-lightgreen);
    width: 25px;
    height: 25px;
`;
export const InstagramIcon = styled(Instagram)`
    color: var(--main-lightgreen);
    width: 20px;
    height: 20px;
`;

export const TwitterIcon = styled(Twitter)`
    color: var(--main-lightgreen);
    width: 25px;
    height: 25px;
`;

export const Container = styled.footer`
    height: 400px;
    padding: 0px 60px;
    display: flex;
    margin: -30px auto 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1440px;

    @media (max-width: 900px) {
        padding: 0;
        margin: 80px auto;
    }

    @media (max-width: 530px) {
        padding: 0px;
        height: auto;
    }
`;

export const Wrapper = styled.div`
    width: 1200px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 auto;

    section.footer-menu {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px 0;
    }

    @media (max-width: 1336px) {
        width: 100%;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    @media (max-width: 530px) {
        section.footer-menu {
            flex-direction: column;
        }
    }
`;

export const List = styled.ul`
    list-style-type: none;

    li {
        color: #4f5665;
        margin: 20px 0;
        cursor: pointer;
    }

    @media (max-width: 1010px) {
        li {
            font-size: 0.9rem;
        }
    }
`;

export const MenuList = styled.section`
    margin-right: 40px;
    :last-child {
        margin: 0;
    }

    h3 {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 25px;
    }

    @media (max-width: 1010px) {
        margin-right: 20px;
        :last-child {
            margin: 0;
        }
        h3 {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 530px) {
        margin-bottom: 15px;
    }
`;
export const IconArea = styled.div`
    margin-right: 15px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    background-color: #fff;
    box-shadow: 0px 10px 15px -11px rgba(0, 0, 0, 0.75);

    :last-child {
        margin-right: 0;
    }
`;

export const FooterSide = styled.section`
    padding: 20px;
    section.logo-area {
        display: flex;
        flex-direction: column;

        span {
            color: #4f5665;
            margin-top: 20px;
        }

        img {
            width: 122px;
            height: 47px;
        }
    }

    section.social-area {
        display: flex;
        margin-top: 50px;
        align-items: center;
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`;
