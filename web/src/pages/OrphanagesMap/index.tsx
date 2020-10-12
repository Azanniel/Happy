import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import {
  Container, SideBar, CreateOrphanages,
  SideBarHeader, Image, Title, Subtitle,
  SideBarFooter, State, City
} from './styles';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../../assets/map-marker.svg';

const OrphanagesMap = () => {
  return (
    <Container>
      <SideBar>

        <SideBarHeader>
          <Image src={mapMarker} alt="Happy" />

          <Title>Escolha um orfanato no mapa</Title>
          <Subtitle>Muitas Crianças estão esperando a sua visita</Subtitle>
        </SideBarHeader>

        <SideBarFooter>
          <State>Amazonas</State>
          <City>Manaus</City>
        </SideBarFooter>

      </SideBar>

      <Map
        center={[-3.04012,-59.9681458]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 5
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanages to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanages>

    </Container>
  )
}

export { OrphanagesMap };
