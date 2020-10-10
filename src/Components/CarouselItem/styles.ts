import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid'


export const Container = styled.div`
    min-width: calc(33% - 30px);
    min-height: 230px;
    margin: 0 15px;
    border: 2px solid #DDDDDD;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 22px;

    p.person-description {
       color: #0B132A;
       font-size: 0.9rem;
       line-height: 30px;

    }

    :hover {
        border: 2px solid #00A536;
    }
`;

export const PersonHeader = styled.section`

    display: flex;
    margin-bottom: 20px;
    align-items: center;
    h3 {
        color: #0B132A;
        font-weight: bold;
        font-size: 0.9rem;
    }

    span.person-website {
        margin-top: 5px;
        color: #4F5665;
        font-size: 0.8rem;
    }

    section.rate-area {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 0.9rem;
            color: #0B132A;
            margin-right: 5px;
            line-height: 10px;
        }
    }

`


export const StarIcon = styled(Star)`
    color: #FEA250;
    width: 20px;
    height: 20px;

`

interface IImageProps {
    image?: string
}


export const PersonImage = styled("div")<IImageProps>`
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;

`