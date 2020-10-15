import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main, OrphanageDetails, Image, ImagesArea, ButtonImage,
  OrphanageDetailsContent, OrphanageName, OrphanageAbout,
  MapContainer, MapContainerFooter, MapContainerFooterButton,
  Divider, InstructionsLabel, Instructions,
  OpenDetails, Hour, OpenOnWeekends,
  ContactButton
} from './styles';

import { SideBarSimple } from '../../components/SideBarSimple';
import { mapIcon } from '../../utils/mapIcon';
import { api } from '../../services/api';

interface Orphanage {
  name: string;
  about: string;
  latitude: number;
  longitude: number;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  whatsapp: string;
  images: Array<{
    id: number;
    url: string;
  }>
}

interface RouteParams {
  id: string;
}

const Orphanage = () => {
  const params = useParams<RouteParams>();

  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  },[params.id]);

  if(!orphanage){
    return <p>Carregando ....</p>;
  }

  return (
    <Container>
      <SideBarSimple />

      <Main>
        <OrphanageDetails>
          <Image src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <ImagesArea>

            {
              orphanage.images.map((image, index) => {
                return (
                  <ButtonImage
                    key={image.id}
                    onClick={() => { setActiveImageIndex(index) }}
                    active={activeImageIndex === index}
                  >
                    <Image src={image.url} alt={orphanage.name} />
                  </ButtonImage>
                );
              })
            }

          </ImagesArea>

          <OrphanageDetailsContent>
            <OrphanageName>{orphanage.name}</OrphanageName>
            <OrphanageAbout>{orphanage.about}</OrphanageAbout>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={17}
                style={{ width: '100%', height: 280, borderRadius: 20 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <MapContainerFooter>
                <MapContainerFooterButton
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </MapContainerFooterButton>
              </MapContainerFooter>
            </MapContainer>

            <Divider />

            <InstructionsLabel>Instruções para visita</InstructionsLabel>
            <Instructions>{orphanage.instructions}</Instructions>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>

              {
                orphanage.open_on_weekends ? (
                  <OpenOnWeekends>
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </OpenOnWeekends>
                ) : (
                  <OpenOnWeekends dontOpen >
                    <FiInfo size={32} color="#ff669d" />
                    Não atendemos <br />
                    fim de semana
                  </OpenOnWeekends>
                )
              }
            </OpenDetails>

            <ContactButton
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=55${orphanage.whatsapp}&text=Olá, ${orphanage.name}. Gostaria de fazer uma visita, poderia dizer mais detalhes ?`}
            >
              <FaWhatsapp size={20} color="#fff" />
              Entrar em contato
            </ContactButton>

          </OrphanageDetailsContent>

        </OrphanageDetails>
      </Main>
    </Container>
  );
}

export { Orphanage };
