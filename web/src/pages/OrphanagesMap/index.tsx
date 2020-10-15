import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import {
  Container, SideBar, CreateOrphanages,
  SideBarHeader, Image, Title, Subtitle,
  SideBarFooter, State, City,
  GoToOrphanage
} from './styles';

import './mapPopup.css';

import mapMarker from '../../assets/map-marker.svg';

import { mapIcon } from '../../utils/mapIcon';
import { api } from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    })
  },[]);

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
        center={[-3.033404,-59.972457]}
        zoom={13}
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

        {
          orphanages.map(orphanage => {
            return(
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup
                  className="map-popup"
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                >
                  {orphanage.name}
                  <GoToOrphanage to={`/orphanage/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </GoToOrphanage>
                </Popup>
              </Marker>
            );
          })
        }
      </Map>

      <CreateOrphanages to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanages>

    </Container>
  )
}

export { OrphanagesMap };
