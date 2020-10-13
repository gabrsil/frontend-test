import styled from 'styled-components';

export const Container = styled.div`
    button {
        color: var(--main-lightgreen);
        border: none;
        border: 2px solid var(--main-lightgreen);
        background-color: #fff;
        width: 40px;
        height: 40px;
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
`;
