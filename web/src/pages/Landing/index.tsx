import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container, ContentWrapper, EnterApplication,
  Image, LocationCity, LocationContent,
  LocationState, MainContent, Subtitle, Title
} from './styles';

import logoImg from '../../assets/logo.svg'

const Landing = () => {
  return(
    <Container>
      <ContentWrapper>
        <Image src={logoImg} alt="Logo" />

        <MainContent>
          <Title>Leve felicidade para o Mundo</Title>
          <Subtitle>Visite orfanatos e mude o dia de muitas crianças</Subtitle>
        </MainContent>

        <LocationContent>
          <LocationState>Amazonas</LocationState>
          <LocationCity>Manaus</LocationCity>
        </LocationContent>

        <EnterApplication to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApplication>

      </ContentWrapper>
    </Container>
  );
}

export { Landing };
