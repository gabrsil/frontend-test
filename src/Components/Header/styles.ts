import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    img.header-logo {
        width: 122px;
        height: 47px;
    }

    ul {
        list-style-type: none;
    }

    span.hamb-icon {
        margin-left: auto;
        cursor: pointer;
        display: none;
        @media (max-width: 780px) {
            display: initial;
        }
    }
`;

export const NavBar = styled.ul`
    margin-left: auto;
    display: flex;
    align-items: center;

    @media (max-width: 780px) {
        display: none;
    }
`;

export const MenuIcon = styled(Menu)`
    width: 40px;
    height: 40px;
    color: var(--main-lightgreen);
`;

export const NavItem = styled.li`
    margin: 0 35px;
    font-size: 1rem;

    a.nav-link {
        color: #4f5665;
        transition: filter 0.2s;

        :hover {
            filter: brightness(1.5);
        }
    }

    a.nav-btn {
        color: var(--main-lightgreen);
        border-radius: 20px;
        border: 1px solid var(--main-lightgreen);
        padding: 10px 30px;
        font-weight: bold;
        transition: 0.2s;

        :hover {
            background-color: var(--main-lightgreen);
            color: #fff;
        }
    }

    :last-child {
        margin: 0px 15px;
    }
`;
