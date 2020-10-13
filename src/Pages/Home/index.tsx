import React, { useState, useEffect } from 'react';
import Ilustration1 from '../../assets/Illustration 1.svg';
import CarouselItem from '../../Components/CarouselItem';
import Carousel from '../../Components/Carousel';
import BottomCard from '../../Components/BottomCard';
import QuantitativeArea from '../../Components/QuantitativeArea';
import MidContent from '../../Components/MidContent';
import Img from 'react-cool-img';

import { Container, MainContent, FeedbackArea } from './styles';

import Header from '../../Components/Header';

interface IPerson {
    firstname: string;
    lastname: string;
    website: string;
    image: string;
}

const Home: React.FC = () => {
    const [personList, setPersonList] = useState<IPerson[]>([]);

    const fetchPersonApi = async () => {
        fetch('https://fakerapi.it/api/v1/persons')
            .then((res) => res.json())
            .then((resp) => {
                setPersonList(resp.data.slice(0, 9));
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchPersonApi();
    }, []);

    return (
        <Container>
            <Header />
            <main>
                <MainContent>
                    <section className="content-info">
                        <h1>
                            Solicite entregadores de forma eficiente <span>🛵</span>
                        </h1>
                        <p>
                            Somos a solução que o seu comércio precisa pra lidar com entregas de forma prática e
                            objetiva.
                        </p>
                        <button className="global-btn">Entre em contato</button>
                    </section>
                    <section className="content-img">
                        <Img src={Ilustration1} alt="people-img" debounce={300} />
                    </section>
                </MainContent>
                <QuantitativeArea />
                <MidContent />
                <FeedbackArea>
                    <section className="text-area">
                        <h1>
                            Utilizada por centenas de empreendedores <span>👀</span>
                        </h1>
                        <p>
                            Veja alguns depoimentos de comerciantes que utilizam a Loocal para gerenciar as demandas de
                            entregas dos seus estabelecimentos
                        </p>
                    </section>
                    <Carousel>
                        {personList.map((person, id) => (
                            <CarouselItem
                                key={id}
                                firstname={person.firstname}
                                lastname={person.lastname}
                                image={person.image}
                                website={person.website}
                                description="Lorem Ipsum este pur şi simplu o machetă 
                                pentru text a industriei tipografice. Lorem Ipsum a 
                                fost macheta standard a industriei încă din secolul al XVI-lea."
                                rate={4.5}
                            />
                        ))}
                    </Carousel>
                </FeedbackArea>
                <BottomCard />
            </main>
        </Container>
    );
};

export default Home;
