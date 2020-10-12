import styled from 'styled-components';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 45px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 95%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImage}) no-repeat 80% center;
  background-size: contain;
`;

const Image = styled.img``;

const MainContent = styled.main`
  max-width: 350px;
`;

const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

const Subtitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

const LocationContent = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

const LocationState = styled.strong`
  font-weight: 800;
`;

const LocationCity = styled.span``;

const EnterApplication = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;

  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }
`;

export {
  Container, ContentWrapper, Image, MainContent,
  Title, Subtitle, LocationContent, LocationState, LocationCity,
  EnterApplication
};
