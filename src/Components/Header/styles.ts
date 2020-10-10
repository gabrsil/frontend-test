import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    img.header-logo {
        width: 122px;
        height: 47px;
    }
    
    ul {
        list-style-type: none;
    }
`;

export const NavBar = styled.ul`
    margin-left: auto;
    display: flex;
    align-items: center;

`

export const NavItem = styled.li`

    margin: 0 35px;
    font-size: 1rem;

    a {
        
        color: #4F5665;
    }

    a.nav-btn {
        color: #00A536;
        border-radius: 20px;
        border: 1px solid #00A536;
        padding: 10px 30px;
        font-weight: bold;
    }

    :last-child {
        margin: 0px 15px;
    }

`
