import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media (max-width: 780px) {
        display: initial;
    }

    .bm-item {
        display: inline-block;
        text-decoration: none;
        margin-bottom: 10px;
        color: #ededed;
        transition: color 0.2s;
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }

    .bm-item:hover {
        color: #99ffba;
    }

    .bm-burger-button {
        position: absolute;
        width: 36px;
        height: 30px;
        right: 36px;
        top: 40px;
    }

    .bm-burger-bars {
        background: var(--main-lightgreen);
    }

    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    .bm-cross {
        background: #bdc3c7;
    }

    .bm-menu {
        background: rgba(55, 59, 72, 0.5);
        padding: 2.5em 1.5em 0;
        font-size: 1.2em;
    }

    .bm-item-list {
        color: #b8b7ad;
    }
`;
