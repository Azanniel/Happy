import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import mapMarker from '../assets/map-marker.svg';

const Container = styled.div`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 48px;
`;

const SideBarFooter = styled.div`
`;

const GoBack = styled.a`
  width: 48px;
  height: 48px;
  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`;

const SideBarSimple = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Image src={mapMarker} alt="Happy" />

      <SideBarFooter>
        <GoBack onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </GoBack>
      </SideBarFooter>
    </Container>
  );
}

export { SideBarSimple };
